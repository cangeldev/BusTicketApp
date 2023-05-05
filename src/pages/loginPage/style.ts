import { StyleSheet } from 'react-native'
import colors from '../../assets/colors/colors'

export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
    },
    contentView: {
        padding: 8,
    },
    forgotPasswordTxt: {
        alignSelf: "flex-end",
        marginHorizontal: 18,
        fontSize: 12,
        color: colors.LoginTxt,
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
        color: colors.LoginTxt,
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
        fontSize: 30,
        fontWeight: "bold",
        alignSelf: "center",
        marginVertical: 7,
        color: colors.white
    },
    titleExt: {
        fontSize: 12
    },
    buttonView: {
        marginTop: 10
    },
    backIcon: {
        position: "absolute",
        marginLeft: 15,
        marginTop: 12
    }
})