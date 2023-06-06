import { View, Text, Image } from 'react-native'
import React, { FC } from 'react'
import style from './style'

interface ISeatInfoCard {
    image: Image
    text: string
}
export const SeatInfoCard: FC<ISeatInfoCard> = ({ text, image }) => {
    return (
        <View style={style.container}>
            <Image
                source={image as any}
                style={style.image}
            />
            <Text style={style.txt}>
                {text}
            </Text>
        </View>
    )
}
