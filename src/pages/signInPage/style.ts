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
    haveAccountTxt: {
        alignSelf: "center",
        color: colors.black,
        marginTop: 20
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
        marginTop: 30
    },
    backIcon: {
        position: "absolute",
        marginLeft: 15,
        marginTop: 12
    }
})