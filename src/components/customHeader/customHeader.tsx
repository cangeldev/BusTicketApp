import { View, Text } from 'react-native'
import React from 'react'
import style from './style'
import Icon from 'react-native-vector-icons/AntDesign'
import colors from 'assets/colors/colors'
export const CustomHeader = () => {
    return (
        <View style={style.container}>
            <Icon name="left"
                size={22}
                color={colors.white}
                style={style.backIcon}
            />
            <View style={style.cityView}>
                <Text style={style.city}>
                    İstanbul
                </Text>
                <Icon name="arrowright"
                    size={20}
                    color={colors.white}
                    style={style.rightIcon}
                />
                <Text style={style.city}>
                    Ankara
                </Text>
            </View>
            <Text style={style.dateText}>
                2 Haziran Cuma - Saat 12.30
            </Text>
        </View>
    )
}
