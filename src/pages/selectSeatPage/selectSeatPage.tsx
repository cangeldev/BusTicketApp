import { View, Text, StatusBar, FlatList, ImageBackground } from 'react-native'
import React from 'react'
import style from './style'
import { CustomButton, CustomHeader } from '../../components'
import { useNavigation } from '@react-navigation/native'
import { SeatInfoList, SeatList } from 'utils/helper'
import { SeatCard, SeatInfoCard } from 'components/cards'
import colors from 'assets/colors/colors'
import { BackGroundImage, SelectSeat } from 'assets/index'
import { useSelector } from "react-redux"
import { RootState } from 'features/store'
import FlashMessage from 'components/flashMessage/flashMessage'

export const SelectSeatPage = () => {
    const { seat, price } = useSelector((state: RootState) => state.users.UserInfo)
    const navigation = useNavigation<any>()
    const handleButton = () => {
        if (seat.length == 0) {
            FlashMessage("Lütfen Koltuk Seçiniz")
        }
        else
            navigation.navigate("PaymentPage")
    }
    const render =
        ({ item }: any) =>
            <SeatInfoCard
                text={item.text}
                image={item.image}
            />
    const selectSeatCard =
        ({ item }: any) =>
            <View>
                <ImageBackground
                    source={SelectSeat}
                    style={style.seatBackground} >
                    <Text style={style.selectSeatText}>
                        {item}
                    </Text>
                </ImageBackground>

            </View>
    const renderSeat =
        ({ item }: any) =>
            <SeatCard
                value={item.value}
                id={item.id}
                status={item.status}
                position={item.position}
            />
    const renderSeparator = () => {
        return <Text style={style.seperator}>
            |
        </Text>
    }
    return (
        <View style={style.container}>
            <StatusBar
                backgroundColor={colors.buttonBackground}
                barStyle={"light-content"}
            />
            <CustomHeader />
            <Text style={style.title}>
                Koltuk Seçimi
            </Text>
            <FlatList
                data={SeatInfoList}
                ItemSeparatorComponent={renderSeparator}
                renderItem={render}
                horizontal
                style={style.flatlistView} />
            <View style={style.backGroundImageView}>
                <ImageBackground
                    source={BackGroundImage}
                    style={style.backGroundImage}>
                    <FlatList
                        data={SeatList}
                        renderItem={renderSeat}
                        numColumns={5}
                        style={{ marginTop: 85 }} />
                </ImageBackground>
            </View>
            {
                seat == 0 ? null :
                    <View style={style.infoSeatView}>
                        <Text style={style.infoSeatViewText}>
                            Seçtiğiniz Koltuklar :
                        </Text>
                        <View>
                            <FlatList
                                data={seat}
                                renderItem={selectSeatCard}
                                horizontal
                            />
                        </View>
                        <Text style={style.infoSeatViewText}>
                            - Toplam Fiyat: {price * (seat.length)} ₺
                        </Text>
                    </View>
            }
            <CustomButton
                title='Onayla'
                onClick={handleButton}
            />
        </View>
    )
}