import React, { useState, useRef } from 'react'
import { View, Text, TouchableOpacity, StatusBar, ImageBackground, Alert } from 'react-native'
import * as Animatable from 'react-native-animatable'
import style from './style'
import { CustomButton, CustomInput, CustomTextView } from '../../components'
import colors from 'assets/colors/colors'
import { CardBack, CardFront } from 'assets/index'
import { useSelector } from "react-redux"
import { RootState } from 'features/store'
import { handleSignOut } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'

export const PaymentPage = () => {
    const [isFront, setIsFront] = useState(true)
    const [name, setName] = useState("")
    const [cardNumber, setcardNumber] = useState("")
    const [cvcNo, setCvcNo] = useState("")
    const [validThruNo, setValidThruNo] = useState("")
    const flipRef = useRef(null)
    const { from, to, date, hours, seat } = useSelector((state: RootState) => state.users.UserInfo)
    const navigation = useNavigation<any>();

    const toggleCard = () => {
        setIsFront(!isFront)
        if (flipRef.current) {
            flipRef.current.flipInY(700)
        }
    };
    const handleNameChange = (inputText: string) => {
        setName(inputText);
        setIsFront(true)
    };
    const handleCardNoChange = (inputText: string) => {
        setIsFront(true)
        if (/^\d*$/.test(inputText)) {
            const formattedNumber = inputText.replace(/\d{4}(?=\d)/g, '$& ');
            setcardNumber(formattedNumber);
        }
    };
    const handleCvcNoChange = (inputText: string) => {
        setCvcNo(inputText);
        setIsFront(false)
    };
    const handleValidThruNoChange = (inputText: string) => {
        setIsFront(true)
        if (/^\d*$/.test(inputText)) {
            const formattedNumber = inputText.replace(/\d{2}(?=\d)/g, '$&/');
            setValidThruNo(formattedNumber);
        }
    };
    return (
        <View style={style.container}>
            <StatusBar barStyle={"dark-content"}
                backgroundColor={colors.white}
            />
            <TouchableOpacity
                style={style.cardContainer}
                onPress={toggleCard}>
                <Animatable.View
                    ref={flipRef}
                    style={style.card}
                    animation="flipInY"
                    duration={500}
                    useNativeDriver
                >
                    {isFront ? (
                        <ImageBackground
                            source={CardFront}
                            style={style.cardImage}>
                            <Text style={style.cardNo}>
                                {cardNumber}
                            </Text>
                            <Text numberOfLines={1} style={style.name}>
                                {name}
                            </Text>
                            <View style={style.validThruView}>
                                <Text style={style.validThruTitle}>
                                    VALID {"\n"}THRU
                                </Text>
                                <Text style={style.validThru}>
                                    {validThruNo}
                                </Text>
                            </View>
                        </ImageBackground>
                    ) : (
                        <ImageBackground
                            source={CardBack}
                            style={style.cardImage}>
                            <Text style={style.cvcText}>
                                {cvcNo}
                            </Text>
                        </ImageBackground>
                    )}
                </Animatable.View>
            </TouchableOpacity>
            <View style={style.infoView}>
                <View style={style.infoInnerView}>
                    <CustomTextView
                        title='Kalkış'
                        text={from + " Otogarı"}
                    />
                    <CustomTextView
                        title='Hareket Zamanı'
                        text={date + '\n' + hours}
                    />
                </View>
                <View style={[style.infoInnerView, { paddingLeft: 20 }]}>
                    <CustomTextView
                        title='Varış'
                        text={to + " Otogarı"}
                    />
                    <CustomTextView
                        title='Koltuk'
                        text={seat + " "}
                    />
                </View>
            </View>
            <CustomInput
                changeText={handleNameChange}
                title='Adı Soyadı'
                placeHolder='John Doe'
            />
            <CustomInput
                changeText={handleValidThruNoChange}
                keyboardType='numeric'
                maxlength={4}
                title='Geçerlilik Tarihi'
                placeHolder='07/24'
            />
            <CustomInput
                changeText={handleCardNoChange}
                keyboardType='number-pad'
                maxlength={16}
                title='Kart numarası'
                placeHolder=' ·  ·  ·  ·   ·  ·  ·  ·    ·  ·  ·  ·    ·  ·  ·  · '
            />
            <CustomInput
                changeText={handleCvcNoChange}
                keyboardType='number-pad'
                maxlength={3}
                title='CVC'
                placeHolder='***'
            />
            <CustomButton
                title='Onayla'
                onClick={() => {
                    Alert.alert('Ödeme İşleminiz Başarılı', 'İyi yolculuklar Dileriz.', [
                        { text: 'Bitir', onPress: () => null },
                    ]);
                    handleSignOut(navigation)
                }}
            />
        </View >
    );
};

