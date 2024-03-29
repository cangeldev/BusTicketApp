import React, { FC } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import style from './style'
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import colors from 'assets/colors/colors'
import { Seat } from 'assets/index'
import { useSelector, useDispatch } from "react-redux"
import { RootState } from 'features/store'
import { addToHours, addToPrice } from 'features/userSlice'

interface IBusCard {
    price: number
    time: string
    duration: string
    image: Image
}

export const BusCard: FC<IBusCard> = ({ price, time, duration, image }) => {

    const from = useSelector((state: RootState) => state.users.UserInfo.from)
    const to = useSelector((state: RootState) => state.users.UserInfo.to)
    const dispatch = useDispatch()
    const navigation = useNavigation<any>()

    const handleButton = () => {
        navigation.navigate("SelectSeatPage")
        dispatch(addToHours(time))
        dispatch(addToPrice(price))
    }

    return (
        <View style={style.container}>
            <TouchableOpacity style={style.button}>
                <Text
                    onPress={handleButton}
                    style={style.buttonText}>
                    Koltuk Seç
                </Text>
            </TouchableOpacity>
            <View style={style.timeView}>
                <Image
                    source={image as any}
                    style={style.image}
                />
                <View >
                    <Text style={style.timeText}>
                        {time}
                    </Text>
                    <View style={style.innerTimeView}>
                        <Icon name="clockcircleo"
                            size={13}
                            color={colors.black}
                        />
                        <Text style={style.innerTimeViewText}>
                            {duration}
                        </Text>
                    </View>
                </View>
                <Text style={[style.priceText]}>
                    {price} ₺
                </Text>
            </View>
            <View style={style.seatIconView}>
                <Image
                    source={Seat}
                    style={style.seatIcon}
                />
                <Text style={style.seatText}>
                    2+1
                </Text>
            </View>
            <View style={style.cityView}>
                <Text numberOfLines={1} style={style.city}>
                    {from + " Otogarı"}
                </Text>
                <Icon
                    name="right"
                    size={14}
                    color={colors.black}
                    style={style.rightIcon}
                />
                <Text numberOfLines={1} style={style.city}>
                    {to + " Otogarı"}
                </Text>
            </View>
        </View>
    )
}