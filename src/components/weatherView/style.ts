import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        elevation: 3,
        padding: 10,
        paddingHorizontal: 8,
        borderRadius: 10,
        width: 170
    },
    title: {
        position: "absolute",
        top: -12,
        backgroundColor: colors.white,
        left: 4,
        color: colors.black,
        paddingHorizontal: 6,
        fontWeight: "bold"
    },
    weatherHeat: {
        fontSize: 45
    },
    cityText: {
        overflow: "hidden",
        fontSize: 13
    },
    countryText: {
        color: colors.black,
        fontWeight: "bold",
        fontSize: 14
    },
    image: {
        width: 60,
        height: 60,
        position: "absolute",
        right: 1,
        top: 10
    }
})