
import {View, Text, Pressable, StyleSheet} from 'react-native';
import Color from '../../constant/color';
function PrimaryButton({children, onPress}) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
            onPress={onPress} 
            android_ripple={{color: Color.primary600}} 
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
        backgroundColor: Color.primary500,
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