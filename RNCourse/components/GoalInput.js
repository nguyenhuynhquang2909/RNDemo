import { useState } from 'react';
import {StyleSheet, View, TextInput, Button, Modal} from 'react-native';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
      }
    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('')
    }
    return (
        <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
        <TextInput 
        placeholder='Your course goals'
         style={styles.textInput} 
         onChangeText={goalInputHandler} 
         value={enteredGoalText}
         />
         <View style={styles.buttonContainer}>
            <View style={styles.button}>
            <Button title='Add goal' onPress={addGoalHandler}/>
            </View>
            <View style={styles.button}>
            <Button title='Cancel' onPress={props.onCancel}/>
            </View>
    
        </View>
      </View>
      </Modal>
    )
}
const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        padding: 16
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8
      },
      buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
      },
      button: {
        width: 100,
        marginHorizontal: 8
      }
});

export default GoalInput;