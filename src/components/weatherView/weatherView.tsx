import { View, Text, Image } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import { Sun } from '../../assets'

interface IWeather {
    title: string,
    place: string
}
export const WeatherView: FC<IWeather> = ({ title, place }) => {
    return (
        <View style={style.container}>
            <Text style={style.title}>
                {title}
            </Text>
            <Text style={style.weatherHeat}>
                8°
            </Text>
            <Text>
                {place},{" "}
                <Text>
                    TÜRKİYE
                </Text>
            </Text>
            <Image source={Sun} style={{ width: 60, height: 60, position: "absolute", right: 10, top: 10 }} />
        </View>
    )
}