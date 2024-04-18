import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Color from '../../constant/color';

function NumberContainer({children}) {
    return (
    <View style={styles.container}>
        <Text style={styles.numberText}>{children}</Text>
    </View>
    );
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Color.accent500,
        padding: deviceWidth < 300 ? 12 : 24,
        margin: deviceWidth < 300 ? 12 : 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: 'white',
        fontSize: deviceWidth < 300 ? 28 : 24,
        // fontWeight: 'bold',
        fontFamily: 'opens-sans-bold'
    }
})