import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import Title from '../components/Title';
function generateRandonBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min) + min);
    if (rndNum === exclude) {
        return generateRandonBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}
function GameScreen() {
    return <View style={styles.screen}>     
       <View>
        <Title>Opponent's Guest</Title>
       </View>
        {/* GUESS */}
        <View>
            <Text>Higher or lower?</Text>
            {/* +
            - */}
        </View>
        {/* <View>
            LOG ROUNDS
        </View> */}
        </View>
}
export default GameScreen;
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    }
})