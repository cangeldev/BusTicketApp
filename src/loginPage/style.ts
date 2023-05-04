import { StyleSheet } from 'react-native'
import colors from '../assets/colors/colors'

export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
    },
    contentView: {
        padding: 5,
        marginTop: -10
    },
    forgotPasswordTxt: {
        alignSelf: "flex-end",
        marginHorizontal: 18,
        fontSize: 12,
        color: colors.black,
        textDecorationLine: "underline"
    },
    anotherLoginView: {
        padding: 10,
        alignItems: "center"
    },
    haveAccountTxt: {
        alignSelf: "center",
        color: colors.black
    },
    signUpTxt: {
        color: colors.buttonBackground,
        textDecorationLine: "underline"
    },
    busLottie: {
        height: 310,
        alignSelf: "center"
    },
    titleView: {
        backgroundColor: colors.buttonBackground
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
        alignSelf: "center",
        marginVertical: 10,
        color: colors.white
    },
    titleExt: {
        fontSize: 12
    },
    buttonView: {
        marginTop: 10
    }
})