import { Image, View } from 'react-native'
import React, { FC } from 'react'
import style from './style'

interface IAnotherLoginCard {
    image: Image,
}
export const AnotherLoginCard: FC<IAnotherLoginCard> = ({ image }) => {
    return (
        <View style={style.container}>
            <Image
                source={image as any}
                style={style.image} />
        </View>
    )
}
