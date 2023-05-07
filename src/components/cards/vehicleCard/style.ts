import { StyleSheet } from 'react-native'
import colors from '../../../assets/colors/colors'

export default StyleSheet.create({
    container: {
        paddingHorizontal: 17,
        paddingVertical: 10,
        alignSelf: "flex-start",
        alignItems: "center",
        borderRadius: 5
    },
    txt: {
        marginTop: 2,
        color: colors.black,
        fontSize: 13
    }
})