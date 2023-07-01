import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    containerWrap: {
        flex: 1,
        height: 1,
        backgroundColor: "#f3f3f3",
    },
    container: {
        marginHorizontal: 25,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 7
    },
    text: {
        width: 100,
        textAlign: 'center',
        color: colors.black,
        fontSize: 13,
        marginHorizontal: 10
    }
})