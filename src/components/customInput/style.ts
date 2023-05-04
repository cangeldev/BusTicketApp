import { StyleSheet } from 'react-native'
import colors from '../../assets/colors/colors'
export default StyleSheet.create({

    container: {
        marginHorizontal: 15,
        flexDirection: "row",
        alignItems: "center",
        marginVertical:5
    },
    image: {
        width: 24,
        height: 24,
    },
    txtInput: {
        borderRadius: 20,
        backgroundColor: colors.white,
        marginLeft: 10,
        overflow: "hidden",
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 5
    }
})