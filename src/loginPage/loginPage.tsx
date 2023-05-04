import { View, Text } from 'react-native'
import React from 'react'
import style from './style'
import { CustomButton, CustomInput } from '../components'
import { Email, Password } from '../assets'

export const LoginPage = () => {
    return (
        <View style={style.container}>
            <View style={style.backgroundShapeView}>
                <CustomInput
                    image={Email}
                    placeHolder='example@gmail.com'
                />
                <CustomInput
                    image={Password}
                    placeHolder='********'
                />
                <Text style={style.forgotPasswordTxt}>
                    Forgot Password?
                </Text>
                <CustomButton title='Log in' />
            </View>
        </View>
    )
}
