import { View, Text, Image } from 'react-native'
import React, { FC } from 'react'
import style from './style'

interface IWeather {
    title: string,
    place: string,
    temp: number,
    image: string
}
export const WeatherView: FC<IWeather> = ({ title, place, temp, image }) => {
    return (
        <View style={style.container}>
            <Text style={style.title}>
                {title}
            </Text>
            <Text style={style.weatherHeat}>
                {temp}°
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
                source={{ uri: image }}
                style={style.image}
            />
        </View>
    )
}