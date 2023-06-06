import { Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import style from './style'

interface ICustomButton {
    title: string,
    onClick?: () => void;
}

export const CustomButton: FC<ICustomButton> = ({ title, onClick }) => {
    return (
        <TouchableOpacity
            onPress={onClick}
            style={style.container}>
            <Text style={style.txt}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}
