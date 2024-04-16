import { useState, useEffect } from 'react';
import { View, StyleSheet, Alert} from 'react-native';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

function generateRandonBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min) + min);
    if (rndNum === exclude) {
        return generateRandonBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber, onGameOver}) {
    const intitalGuess = generateRandonBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(intitalGuess);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver
        }
    }, [currentGuess, userNumber, onGameOver])
    function nextGuessHandler(direction) { // direction => 'lower', 'greater'
        if ((direction === 'lower' && currentGuess < userNumber)
         || (direction === 'greater' && currentGuess > userNumber)
         ) {
            Alert.alert("Don't lie!", "You know that this is wrong...", [
                {text: 'Sorry', style: 'cancel'}
            ]);
            return;
        }
        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandonBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
    }

    return (
    <View style={styles.screen}>     
       <View>
        <Title>Opponent's Guest</Title> 
        <NumberContainer>{currentGuess}</NumberContainer>
       </View>
        
        <Card>
            <InstructionText style={styles.instructionText}>Higher or lower</InstructionText>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
                </View>
            </View>
        </Card>
        {/* <View>
            LOG ROUNDS
        </View> */}
        </View>
    );
}
export default GameScreen;
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },
    buttonsContainer: {
        flexDirection: "row", 
    },
    buttonContainer: {
        flex: 1
    },
    instructionText: {
        marginBottom: 12
    }
})