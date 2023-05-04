import { View, Text, Image, TextInput } from 'react-native'
import React, { FC } from 'react'
import style from './style'

interface ICustomInput {
    image: Image,
    placeHolder: string
}
export const CustomInput: FC<ICustomInput> = ({ image, placeHolder }) => {
    return (
        <View style={style.container}>
            <Image source={image as any} style={style.image} />
            <TextInput
                style={style.txtInput}
                placeholder={placeHolder}
            />
        </View>
    )
}