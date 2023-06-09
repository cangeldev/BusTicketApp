import React, { useState, useRef } from 'react'
import { View, Text, TouchableOpacity, StatusBar, ImageBackground } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { CardBack, CardFront } from '../../assets'
import colors from '../../assets/colors/colors'
import style from './style'
import { CustomButton, CustomInput, CustomTextView } from '../../components'

export const PaymentPage = () => {
    const [isFront, setIsFront] = useState(true)
    const flipRef = useRef(null)

    const toggleCard = () => {
        setIsFront(!isFront)
        if (flipRef.current) {
            flipRef.current.flipInY(700)
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
                                1234 1234 1234 1234
                            </Text>
                            <Text numberOfLines={1} style={style.name}>
                                Can Gel
                            </Text>
                            <View style={style.validThruView}>
                                <Text style={style.validThruTitle}>
                                    VALID {"\n"}THRU
                                </Text>
                                <Text style={style.validThru}>
                                    07/24
                                </Text>
                            </View>
                        </ImageBackground>
                    ) : (
                        <ImageBackground
                            source={CardBack}
                            style={style.cardImage}>
                            <Text style={style.cvcText}>
                                123
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
            <View style={style.inputView}>
                <CustomInput
                    title='Adı Soyadı'
                    placeHolder='John Doe'
                />
                <CustomInput
                    keyboardType='number-pad'
                    maxlength={11}
                    title='T.C. Kimlik No'
                    placeHolder='123456789012'
                />
                <CustomInput
                    keyboardType='number-pad'
                    maxlength={16}
                    title='Kart numarası'
                    placeHolder=' ·  ·  ·  ·   ·  ·  ·  ·    ·  ·  ·  ·    ·  ·  ·  · '
                />
                <CustomInput
                    keyboardType='number-pad'
                    maxlength={3}
                    title='CVC'
                    placeHolder='***'
                />
            </View>
            <CustomButton title='Onayla' />
        </View >
    );
};

