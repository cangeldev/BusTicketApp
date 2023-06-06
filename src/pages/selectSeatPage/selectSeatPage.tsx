import { View, Text, Image, StatusBar, FlatList, ImageBackground } from 'react-native'
import React from 'react'
import { BackGroundImage, EmptySeat } from '../../assets'
import style from './style'
import colors from '../../assets/colors/colors'
import { CustomButton, CustomHeader } from '../../components'
import { SeatCard, SeatInfoCard } from '../../components/cards'
import { SeatInfoList, SeatList } from '../../utils/helper'

export const SelectSeatPage = () => {
    const render =
        ({ item }: any) =>
            <SeatInfoCard text={item.text} image={item.image} />

    const renderSeat =
        ({ item }: any) =>
            <SeatCard value={item.value} id={item.id} />

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
            <View style={style.infoSeatView}>
                <Text style={style.infoSeatViewText}>
                    En fazla 4 koltuk seçebilirsiniz :
                </Text>
                <Image source={EmptySeat} style={{ width: 24, height: 24, resizeMode: "center", marginRight: 5 }} />
                <Image source={EmptySeat} style={{ width: 24, height: 24, resizeMode: "center", marginRight: 5 }} />
                <Image source={EmptySeat} style={{ width: 24, height: 24, resizeMode: "center", marginRight: 5 }} />
                <Image source={EmptySeat} style={{ width: 24, height: 24, resizeMode: "center", marginRight: 5 }} />
            </View>
            <CustomButton title='Onayla' />
        </View>
    )
}