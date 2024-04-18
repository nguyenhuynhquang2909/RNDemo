import { StyleSheet, View, Dimensions } from "react-native";
import Color from "../../constant/color";

function Card({children}) {
    return (
        <View style = {styles.card}>
            {children}
        </View>
    );
}
export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
       marginTop: deviceWidth < 380 ? 18:36,
       marginHorizontal: 24,
       padding: deviceWidth < 380 ? 16:32 ,
       backgroundColor: Color.primary800                    ,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0 , height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
})