import { View, Text, Image } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import { Sun } from 'assets/index'

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
            <Text
                numberOfLines={1}
                style={style.cityText}>
                {place},{" "}
                <Text
                    style={style.countryText}>
                    TÜRKİYE
                </Text>
            </Text>
            <Image
                source={Sun}
                style={style.image}
            />
        </View>
    )
}