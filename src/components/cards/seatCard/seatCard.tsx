import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import React, { FC } from 'react'
import { EmptySeat } from '../../../assets'
import style from './style'

interface ISeatCard {
    value: number,
    id: number
}

export const SeatCard: FC<ISeatCard> = ({ value, id }) => {
    const hideValues = [2, 3, 7, 8, 12, 13, 17, 18, 22, 23, 27, 28, 29, 30, 32, 33, 37, 38, 42, 43,];
    if (hideValues.includes(id)) {
        return <View style={style.emptyView} />
    }
    return (
        <TouchableOpacity
        onPress={()=>console.log("first")}
            style={style.button} >
            <ImageBackground
                source={EmptySeat}
                style={style.imageBackground}>
                <Text style={style.valueText}>
                    {value}
                </Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}
