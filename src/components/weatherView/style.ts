import { StyleSheet } from "react-native"
import colors from "../../assets/colors/colors"

export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        elevation: 3,
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 10,
        minWidth:150,
    },
    title: {
        position: "absolute",
        top: -12,
        backgroundColor: colors.white,
        left: 6,
        color: colors.black,
        paddingHorizontal: 6
    },
    weatherHeat: {
        fontSize: 50
    },

})