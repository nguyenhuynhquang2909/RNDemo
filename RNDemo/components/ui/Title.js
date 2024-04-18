import {Text, StyleSheet} from 'react-native';
import Color from '../../constant/color';

function Title({children}) {
    return  <Text style={styles.title}>{children}</Text>
}
export default Title;
const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        fontWeight: 'bold',
        color: Color.accent500,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Color.accent500,
        padding: 12,
        maxWidth: '80%',
        width: 300
    }
});