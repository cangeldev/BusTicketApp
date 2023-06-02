import { StyleSheet } from "react-native"
import colors from "../../assets/colors/colors"

export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        elevation: 3,
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 10,
        width: 170,

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
    cityText: {
        overflow: "hidden",
        fontSize:13
    },
    countryText: {
        color: colors.black,
        fontWeight:"bold",
        fontSize:14
    },
    image: {
        width: 60,
        height: 60,
        position: "absolute",
        right: 10,
        top: 10
    }
})