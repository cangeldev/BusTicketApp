import { StyleSheet } from 'react-native'
import colors from '../../assets/colors/colors'

export default StyleSheet.create({
    container: {
        backgroundColor: colors.buttonBackground,
        paddingVertical: 8,
    },
    backIcon: {
        position: "absolute",
        marginLeft: 20,
        marginVertical: 8,
        marginTop: 20
    },
    cityView: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },
    city: {
        fontSize: 18,
        fontWeight: "800",
        color: colors.white
    },
    rightIcon: {
        marginHorizontal: 12
    },
    dateText: {
        borderWidth: 0.5,
        borderRadius: 15,
        borderColor: colors.white,
        textAlign: "center",
        alignSelf: "center",
        paddingVertical: 5,
        paddingHorizontal: 30,
        marginTop: 5,
        color: colors.white,
        fontWeight: "bold"
    },
})