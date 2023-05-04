import { StyleSheet } from "react-native"
import colors from "../../assets/colors/colors"

export default StyleSheet.create({
    containerWrap: {
        flex: 1,
        height: 1,
        backgroundColor: colors.orange,
    },
    container: {
        marginHorizontal: 25,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        width: 100,
        textAlign: 'center',
        color: colors.black,
        fontSize: 13,
        marginHorizontal: 10
    }
})