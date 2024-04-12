
import {View, Text, Pressable, StyleSheet} from 'react-native';
function pressHandler() {
    console.log('Pressed');
}
function PrimaryButton({children}) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
            onPress={pressHandler} 
            android_ripple={{color: "#640233"}} 
            style={({pressed}) => pressed ? [styles.buttonInnrerContainer, styles.pressed]: styles.buttonInnrerContainer}
             >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )   
}
export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnrerContainer: {
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
        margin: 4,
        elevation: 2
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,

    }
});