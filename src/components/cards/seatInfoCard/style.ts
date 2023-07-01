import colors from 'assets/colors/colors'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        marginHorizontal: 3
    },
    txt: {
        color: colors.black,
        fontSize: 12,
    },
    image:
    {
        width: 16,
        height: 16,
        resizeMode: "center",
        marginRight: 3
    }
})