import { StyleSheet } from 'react-native'
import colors from '../../assets/colors/colors'

export default StyleSheet.create({
    container: {
        backgroundColor: colors.buttonBackground,
        flex: 1
    },
    backIcon: {
        position: "absolute",
        right: 15,
        marginTop: 25,
        color: colors.white
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
        alignSelf: "center",
        marginVertical: 7,
        color: colors.white
    },
    contentView: {
        backgroundColor: colors.white,
        flex: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    txt: {
        alignSelf: "center",
        color: colors.white,
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 20,
        marginTop: 10
    },
    vehicleView: {
        marginTop: 20,
        marginBottom: 10,
        marginHorizontal: 24,
        alignItems: "center",
        borderRadius: 12,
        overflow: "hidden",
        backgroundColor: "#eff3f2"
    },
    selectTicketView: {
        paddingVertical: 15,
        justifyContent: "center"
    },
    changeTicketIconView: {
        backgroundColor: colors.white,
        position: "absolute",
        right: 40,
        borderWidth: 1,
        padding: 5,
        borderRadius: 40
    }
})