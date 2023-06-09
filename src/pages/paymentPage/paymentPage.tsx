import React, { useState, useRef } from 'react'
import { View, Text, TouchableOpacity, StatusBar, ImageBackground } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { CardBack, CardFront } from '../../assets'
import colors from '../../assets/colors/colors'
import style from './style'
import { CustomButton, CustomInput, CustomTextView } from '../../components'

export const PaymentPage = () => {
    const [isFront, setIsFront] = useState(true)
    const [name, setName] = useState("")
    const [cardNo, setCardNo] = useState("")
    const [cvcNo, setCvcNo] = useState("")
    const [validThruNo, setValidThruNo] = useState("")
    const flipRef = useRef(null)

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
            setCardNo(formattedNumber);
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
                                {cardNo}
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
                        text='Düzce Otogarı'
                    />
                    <CustomTextView
                        title='Hareket Zamanı'
                        text='7 haziran Çarşamba 02:25 '
                    />
                </View>
                <View style={[style.infoInnerView, { paddingLeft: 20 }]}>
                    <CustomTextView
                        title='Varış'
                        text='Gebze Otogarı'
                    />
                    <CustomTextView
                        title='Koltuk'
                        text='15'
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
            <CustomButton title='Onayla' />
        </View >
    );
};

