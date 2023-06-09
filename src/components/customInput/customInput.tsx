import { View, Text, TextInput } from 'react-native'
import React, { FC } from 'react'
import style from './style'

interface ICustomInput {
    title: string,
    placeHolder: string
    maxlength?: number,
    keyboardType?: any
}

export const CustomInput: FC<ICustomInput> = ({ placeHolder, title, maxlength, keyboardType }) => {
    return (
        <View style={style.container}>
            <Text style={style.title}>
                {title}
            </Text>
            <TextInput
                keyboardType={keyboardType}
                maxLength={maxlength}
                style={style.txtInput}
                placeholder={placeHolder}
            />
        </View>
    )
}