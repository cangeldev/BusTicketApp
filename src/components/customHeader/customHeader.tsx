import { View, Text } from 'react-native'
import React from 'react'
import style from './style'
import Icon from 'react-native-vector-icons/AntDesign'
import colors from 'assets/colors/colors'
import { useSelector } from "react-redux"
import { RootState } from 'features/store'

export const CustomHeader = () => {

    const from = useSelector((state: RootState) => state.users.UserInfo.from)
    const to = useSelector((state: RootState) => state.users.UserInfo.to)
    const date = useSelector((state: RootState) => state.users.UserInfo.date)
    const hours = useSelector((state: RootState) => state.users.UserInfo.hours)

    return (
        <View style={style.container}>
            <Icon name="left"
                size={22}
                color={colors.white}
                style={style.backIcon}
            />
            <View style={style.cityView}>
                <Text style={style.city}>
                    {from}
                </Text>
                <Icon name="arrowright"
                    size={20}
                    color={colors.white}
                    style={style.rightIcon}
                />
                <Text style={style.city}>
                    {to}
                </Text>
            </View>
            <Text style={style.dateText}>
                {date}{hours == "" ? null : " - Saat " + hours}
            </Text>
        </View>
    )
}
