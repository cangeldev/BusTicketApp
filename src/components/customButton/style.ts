import { StyleSheet } from 'react-native'
import colors from '../../assets/colors/colors'

export default StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginVertical: 10,
        backgroundColor: colors.buttonBackground,
        borderRadius: 6
    },
    txt: {
        color: colors.white,
        padding: 10,
        alignSelf: "center",
        fontSize: 17,
        fontWeight: "bold",
    }
})