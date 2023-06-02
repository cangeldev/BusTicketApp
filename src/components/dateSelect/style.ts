import { StyleSheet } from "react-native"
import colors from "../../assets/colors/colors"

export default StyleSheet.create({
    selectDateView: {
        backgroundColor: colors.white,
        elevation: 2,
        borderRadius: 10,
        alignSelf: "center",
        padding: 10,
        marginBottom: 20
    },
    innerDateView: {
        flexDirection: "row",
        alignItems: "center",
    },
    dateTxt: {
        fontSize: 12
    },
    day: {
        fontSize: 50,
        marginRight: 5,
        color: colors.black,
        fontWeight: "700"
    },
    dateIcon: {
        marginLeft: 5,
        color: colors.black
    }
})