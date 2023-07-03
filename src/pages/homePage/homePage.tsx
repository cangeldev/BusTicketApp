import { View, Text, FlatList, StatusBar } from 'react-native'
import React, { useState } from 'react'
import style from './style'
import Icon from 'react-native-vector-icons/Ionicons'
import { CustomButton, CityDropdown, WeatherView, DateSelect } from '../../components'
import { useNavigation } from '@react-navigation/native'
import { VehicleCard } from 'components/cards'
import { VehicleList } from 'utils/helper'
import colors from 'assets/colors/colors'
import { useSelector } from "react-redux"
import { RootState } from 'features/store'
import FlashMessage from 'components/flashMessage/flashMessage'

export const HomePage = () => {

    const from = useSelector((state: RootState) => state.users.UserInfo.from || 'İstanbul')
    const to = useSelector((state: RootState) => state.users.UserInfo.to || 'Ankara')
    const date = useSelector((state: RootState) => state.users.UserInfo.date)
    const navigation = useNavigation<any>()
    const [selectedItemId, setSelectedItemId] = useState(1)
    const render = ({ item }: any) =>
        <VehicleCard
            title={item.title}
            vehicle={item.vehicle}
            id={item.id}
            selectedItemId={selectedItemId as any}
            onClick={() => setSelectedItemId(item.id)}
        />
    const handleButton = () => {
        if ((from == "İstanbul" || "") || (to == "Ankara" || "")) {
            FlashMessage("Lütfen Şehir Seçiniz")
        }
        else if (date == "") {
            FlashMessage("Lütfen Tarih Seçiniz")
        }
        else
            navigation.navigate("BusListPage")
    }

    return (
        <View style={style.container}>
            <StatusBar
                backgroundColor={colors.buttonBackground}
                barStyle={"light-content"}
            />
            <View>
                <Icon
                    name="md-notifications-outline"
                    size={26}
                    style={style.backIcon}
                />
                <Text style={style.title}>
                    BiletFırsatı
                </Text>
                <Text style={style.txt}>
                    İyi Yolculuklar!
                </Text>
            </View>
            <View style={style.contentView}>
                <View style={style.vehicleView}>
                    <FlatList
                        data={VehicleList}
                        renderItem={render}
                        horizontal
                    />
                </View>
                <Text style={style.weatherTitle}>
                    Tahmini Hava Durumu
                </Text>
                <View style={style.weatherConteiner}>
                    <WeatherView
                        title=' Nereden'
                        place={from}
                    />
                    <WeatherView
                        title='Nereye'
                        place={to}
                    />
                </View>
                <View style={style.selectTicketView}>
                    <CityDropdown
                        title='Kalkış Noktası'
                    />
                    <CityDropdown
                        title='Varış Noktası'
                    />
                    <View style={style.changeTicketIconView}>
                        <Icon
                            name="swap-vertical"
                            size={26}
                        />
                    </View>
                </View>
                <DateSelect />
                <CustomButton
                    title='Ucuz Bilet Bul'
                    onClick={handleButton}
                />
            </View>
        </View>
    )
}
