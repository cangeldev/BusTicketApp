import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    button: {
        transform: [{ rotate: '180deg' }],
        width: 40,
        height: 40,
        marginHorizontal: 1,
        marginBottom: 5,
    },
    imageBackground: {
        alignItems: "center",
        justifyContent: "center",
        width: 40,
        height: 40,
    },
    valueText: {
        transform: [{ rotate: '180deg' }]
    },
    emptyView: {
        width: 40,
        height: 40,
        marginHorizontal: 1,
    }
})
