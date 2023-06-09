import { StyleSheet } from 'react-native'
import colors from '../../assets/colors/colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    cardContainer: {
        alignItems: 'center',
        marginVertical: 20,
        marginTop: 30
    },
    card: {
        width: "90%",
        height: 200,
    },
    cardImage: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
        overflow: "hidden",
    },

    infoView: {
        flex: 1,
        flexDirection: "row",
        marginHorizontal: 20,
        paddingHorizontal: 10,
        borderRadius: 5,
        elevation: 2,
        backgroundColor: colors.white,
    },
    infoInnerView: {
        flex: 0.5,
        overflow: "hidden",
        alignSelf: "flex-start",
        paddingVertical: 5
    },
    cvcText: {
        color: colors.black,
        position: "absolute",
        top: 98,
        right: 98,
        fontSize: 16,
        fontWeight: "bold"
    },
    name: {
        color: colors.white,
        position: "absolute",
        bottom: 15,
        paddingHorizontal: 25,
        maxWidth: 200
    },
    cardNo: {
        color: colors.white,
        position: "absolute",
        paddingHorizontal: 25,
        bottom: 60,
        fontWeight: "bold",
        fontSize: 18
    },
    validThruView: {
        flexDirection: "row",
        position: "absolute",
        top: 80,
        left: 250,
        alignItems: "center",
    },
    validThruTitle: {
        fontSize: 5,
        color: colors.white,
        marginRight: 2
    },
    validThru: {
        color: colors.white,
        fontSize: 12
    }
})