import { View, Text } from 'react-native'
import React from 'react'
import style from './style'
import { CustomInput } from '../components'
import { Email, Password } from '../assets'

export const LoginPage = () => {
    return (
        <View style={style.container}>
            <CustomInput image={Email} placeHolder='Email' />
            <CustomInput image={Password} placeHolder='Password' />
        </View>
    )
}
