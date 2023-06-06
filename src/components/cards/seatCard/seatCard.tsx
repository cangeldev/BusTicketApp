import { View, Text, TouchableOpacity, ImageBackground, Modal, TouchableWithoutFeedback, Image } from 'react-native'
import React, { FC, useState } from 'react'
import { EmptySeat, Female, Male, SelectSeat } from '../../../assets'
import style from './style'
import { CustomButton } from '../../customButton'

interface ISeatCard {
    value: number,
    id: number
}

export const SeatCard: FC<ISeatCard> = ({ value, id }) => {
    const hideValues = [2, 3, 7, 8, 12, 13, 17, 18, 22, 23, 27, 28, 29, 30, 32, 33, 37, 38, 42, 43];
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    if (hideValues.includes(id)) {
        return <View style={style.emptyView} />;
    }

    const handlePress = () => {
        setModalVisible(true)
    };

    const closeModal = () => {
        setModalVisible(false)
    };

    const handleModalPress = () => {
        closeModal();
    };

    const handleOptionSelect = (option: string) => {
        setSelectedOption(option);
    };

    const renderSeatImage = () => {
        if (selectedOption === 'male' || selectedOption === 'female') {
            return SelectSeat;
        } else {
            return EmptySeat;
        }
    };

    return (
        <TouchableOpacity
            onPress={handlePress}
            style={style.button}>
            <ImageBackground
                source={renderSeatImage()}
                style={style.imageBackground}>
                <Text style={style.valueText}>
                    {value}
                </Text>
            </ImageBackground>
            <Modal visible={modalVisible}
                animationType="slide"
                transparent>
                <TouchableWithoutFeedback onPress={handleModalPress}>
                    <View style={style.modalContainer}>
                        <View style={style.innerContainer}>
                            <Text style={style.modalTitle}>
                                Lütfen Seçiniz :
                            </Text>
                            <View style={style.buttonContainer}>
                                <TouchableOpacity
                                    style={[
                                        style.optionButton,
                                        selectedOption === 'male' && style.selectedOptionMale
                                    ]}
                                    onPress={() => handleOptionSelect('male')}>
                                    <Image source={Male} style={style.image} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[
                                        style.optionButton,
                                        selectedOption === 'female' && style.selectedOptionFemale
                                    ]}
                                    onPress={() => handleOptionSelect('female')}>
                                    <Image
                                        source={Female}
                                        style={style.image}
                                    />
                                </TouchableOpacity>
                            </View>
                            <CustomButton
                                onClick={closeModal}
                                title='Onayla'
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </TouchableOpacity>
    );
};
