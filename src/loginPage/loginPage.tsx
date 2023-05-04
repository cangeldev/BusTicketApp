import { View, Text, FlatList } from 'react-native'
import React from 'react'
import style from './style'
import { CustomButton, CustomInput, Divider } from '../components'
import { Email, Password } from '../assets'
import { AnotherLoginList } from '../utils/helper'
import { AnotherLoginCard } from '../components/cards'

export const LoginPage = () => {
    const render = ({ item }: any) => <AnotherLoginCard image={item.value} />
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
                <Divider />
                <View style={style.anotherLoginView}>
                    <FlatList
                        data={AnotherLoginList}
                        renderItem={render}
                        horizontal />
                </View>
            </View>
        </View>
    )
}
