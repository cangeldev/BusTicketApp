import { View, Text, TouchableOpacity, ImageBackground, Modal, TouchableWithoutFeedback, Image } from 'react-native'
import React, { FC, useState } from 'react'
import style from './style'
import { EmptySeat, Female, FemaleSeat, Male, MaleSeat, SelectSeat } from 'assets/index'
import { CustomButton } from 'components/customButton'
import { useDispatch } from "react-redux"
import { addToSeat } from 'features/userSlice'

interface ISeatCard {
    value: number,
    status: string,
    position?: string
}

export const SeatCard: FC<ISeatCard> = ({ value, status, position }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const dispatch = useDispatch()
    const handleDispatch = () => {
        dispatch(addToSeat(value))
    };
    if (status == "passive") {
        return <View style={style.emptyView} />;
    }

    const handlePress = () => {
        setModalVisible(true)
    };

    const closeModal = () => {
        setModalVisible(false)
        handleDispatch()
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
            if (position === "female")
                return FemaleSeat
            else if (position === "male")
                return MaleSeat
            else
                return EmptySeat
        }
    };

    return (
        <TouchableOpacity
            disabled={position === "male" || position === "female" ? true : false}
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
                                onClick={
                                    closeModal
                                }
                                title='Onayla'
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </TouchableOpacity>
    );
};
