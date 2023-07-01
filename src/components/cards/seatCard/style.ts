import colors from 'assets/colors/colors';
import { StyleSheet } from 'react-native';

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
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: colors.black,
        marginHorizontal: 15
    },
    buttonContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        justifyContent: "space-evenly"
    },
    optionButton: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginHorizontal: 10,

        borderRadius: 5,
    },
    selectedOptionFemale: {
        backgroundColor: '#F3D9E7',
    },
    selectedOptionMale: {
        backgroundColor: '#D7E1E9',
    },
    innerContainer: {
        backgroundColor: "#f5f7fa",
        padding: 10,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        width: "100%"
    },
    image: {
        width: 70,
        height: 70,
        resizeMode: "stretch"
    }
});
