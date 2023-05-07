import { StyleSheet } from "react-native"
import colors from "../../assets/colors/colors"

export default StyleSheet.create({
    container: {
        elevation: 2,
        backgroundColor: colors.white,
        marginHorizontal: 25,
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 6,
        margin: 15,
        flexDirection: "row"
    },
    title: {
        position: "absolute",
        top: -12,
        backgroundColor: colors.white,
        left: 10,
        color: colors.black,
        paddingHorizontal: 6
    },
    icon: {
        color: colors.black
    },
    txt: {
        marginLeft: 10,
        fontSize: 15
    }
})