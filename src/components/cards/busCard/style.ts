import { StyleSheet } from 'react-native'
import colors from '../../../assets/colors/colors'

export default StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        marginVertical: 5,
        marginHorizontal: 15,
        paddingVertical: 10,
        borderWidth: 0.1,
        borderColor: colors.white,
        elevation: 1,
        borderRadius: 6,
    },
    image: {
        width: 100,
        height: 55,
        resizeMode: "center"
    },
    city: {
        fontWeight: "600",
        color: colors.black,
        maxWidth: 130
    },
    rightIcon: {
        marginHorizontal: 2
    },
    cityView: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-start",
        maxWidth: 240,
        overflow: "hidden",
    },
    timeText: {
        fontSize: 25,
        color: colors.black,
    },
    priceText: {
        fontSize: 25,
        color: colors.black,
        alignSelf: "center"
    },
    button:
    {
        position: "absolute",
        bottom: 10,
        right: 10
    },
    buttonText:
    {
        padding: 5,
        backgroundColor: "green",
        borderRadius: 5,
        color: colors.white,
        paddingHorizontal: 10
    },
    timeView: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    innerTimeView: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5
    },
    innerTimeViewText: {
        fontSize: 12,
        marginLeft: 4
    },
    seatIcon: {
        width: 18,
        height: 18,
        tintColor: colors.grey
    },
    seatIconView: {
        flexDirection: "row",
        alignItems: "center"
    },
    seatText: {
        color: colors.black
    }
})