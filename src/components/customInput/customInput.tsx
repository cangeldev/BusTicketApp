import { View, Text, TextInput } from 'react-native'
import React, { FC } from 'react'
import style from './style'

interface ICustomInput {
    title: string,
    placeHolder: string
}

export const CustomInput: FC<ICustomInput> = ({ placeHolder, title }) => {
    return (
        <View style={style.container}>
            <Text style={style.title}>
                {title}
            </Text>
            <TextInput
                style={style.txtInput}
                placeholder={placeHolder}
            />
        </View>
    )
}