import colors from 'assets/colors/colors'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        backgroundColor: "#fcfdfe",
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center",
        color: colors.black
    },
    flatlistView: {
        marginVertical: 5,
        marginHorizontal: 15
    },
    backGroundImage: {
        width: "100%",
        height: "100%",
        alignItems: "center",
    },
    backGroundImageView: {
        width: "70%",
        alignSelf: "center",
        height: "70%",
        justifyContent: "center"
    },
    infoSeatView: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 20,
    },
    infoSeatViewText: {
        color: colors.black,
        marginRight: 5
    },
    seperator: {
        color: colors.backgroundShape,
        fontSize: 17,
        marginTop: -4
    },
    seatBackground: {
        width: 24,
        height: 24,
        marginRight: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    selectSeatText: {
        fontSize: 12
    }

})