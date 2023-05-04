import { StyleSheet } from 'react-native'
import colors from '../assets/colors/colors'

export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
    },
    backgroundShapeView: {
        backgroundColor: colors.backgroundShape,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 7,
        flexGrow: 1
    },
    forgotPasswordTxt: {
        alignSelf: "flex-end",
        marginRight: 18
    },
    anotherLoginView: {
        padding: 10,
        alignItems: "center"
    },
    haveAccountTxt: {
        textAlign: "center",
    },
    signUpTxt: {
        color: colors.orange,
    },
    busLottie: {
        height: 220,
      
        alignSelf: "center"
    }
})