import { Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import style from './style';

interface ISelectTicket {
    title: string,
    placeHolder: string
}
export const SelectTicketButton: FC<ISelectTicket> = ({ title, placeHolder }) => {
    return (
        <TouchableOpacity style={style.container}>
            <Text style={style.title}>{title}</Text>
            <Icon
                name="map-marker-alt"
                size={18}
                style={style.icon}
            />
            <Text style={style.txt}>
                {placeHolder}
            </Text>
        </TouchableOpacity>
    )
}
