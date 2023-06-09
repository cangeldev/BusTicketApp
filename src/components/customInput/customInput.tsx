import { View, Text, TextInput } from 'react-native'
import React, { FC, useState } from 'react'
import style from './style'

interface ICustomInput {
    title: string,
    placeHolder: string
    maxlength?: number,
    keyboardType?: any,
    changeText: (text: string) => void;
}

export const CustomInput: FC<ICustomInput> = ({ placeHolder, title, maxlength, keyboardType, changeText }) => {
    const [txt, setTxt] = useState("")
    const handleTextChange = (inputText: string) => {
        setTxt(inputText);
        changeText(inputText);
    };
    return (
        <View style={style.container}>
            <Text style={style.title}>
                {title}
            </Text>
            <TextInput
                onChangeText={handleTextChange}
                keyboardType={keyboardType}
                maxLength={maxlength}
                style={style.txtInput}
                placeholder={placeHolder}
            />
        </View>
    )
}