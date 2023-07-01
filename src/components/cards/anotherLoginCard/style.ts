import { StyleSheet } from 'react-native'
import colors from '../../../assets/colors/colors'

export default StyleSheet.create({
    container: {
        elevation: 2,
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
        backgroundColor: colors.white,
        marginHorizontal: 8,
        marginVertical: 4
    },
    image: {
        width: 20,
        height: 20,
        margin: 7
    }
})