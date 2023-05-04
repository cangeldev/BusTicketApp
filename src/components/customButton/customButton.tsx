import { Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import style from './style'

interface ICustomButton {
    title: string
}

export const CustomButton: FC<ICustomButton> = ({ title }) => {
    return (
        <TouchableOpacity style={style.container}>
            <Text style={style.txt}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}
