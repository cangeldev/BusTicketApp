import { Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import Icon from 'react-native-vector-icons/FontAwesome5'
import colors from 'assets/colors/colors'

interface IVehicleCard {
    title: string,
    vehicle: string,
    id: number,
    selectedItemId: number,
    onClick?: () => void;
}

export const VehicleCard: FC<IVehicleCard> = ({ title, vehicle, id, selectedItemId, onClick }) => {

    return (
        <TouchableOpacity
            onPress={onClick}
            style={[style.container,
            {
                backgroundColor: id === selectedItemId ?
                    colors.buttonBackground : '#eff3f2'
            }]}>
            <Icon
                name={vehicle}
                size={20}
                style={{
                    color: id === selectedItemId ?
                        colors.white : "grey"
                }}
            />
            <Text style={[style.txt, {
                color: id === selectedItemId ?
                    colors.white : colors.black
            }]}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}
