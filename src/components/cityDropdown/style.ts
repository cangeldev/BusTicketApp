import { StyleSheet } from "react-native"
import colors from "../../assets/colors/colors"

export default StyleSheet.create({
    container: {
        marginVertical: 10
    },
    title: {
        marginHorizontal: 35,
        color: colors.black,
        backgroundColor: colors.white,
        alignSelf: "flex-start",
        position: "absolute",
        marginTop: -12
    },
    buttonTextStyle: {
        color: colors.black,
        fontSize: 14,
        textAlign: "left"
    },
    buttonStyle: {
        backgroundColor: colors.white,
        elevation: 2,
        borderRadius: 6,
        paddingHorizontal: 15,
        width: "90%",
        alignSelf: "center",
    },
    dropdownStyle: {
        backgroundColor: colors.white,
        borderRadius: 10,
        marginTop: 100,
    },
    selectedRowTextStyle: {
        color: colors.black,
        fontWeight: "bold"
    }
})