import { View, Text, Image, StatusBar, FlatList, ImageBackground } from 'react-native'
import React from 'react'
import style from './style'
import { CustomButton, CustomHeader } from '../../components'
import { useNavigation } from '@react-navigation/native'
import { SeatInfoList, SeatList } from 'utils/helper'
import { SeatCard, SeatInfoCard } from 'components/cards'
import colors from 'assets/colors/colors'
import { BackGroundImage, EmptySeat } from 'assets/index'

export const SelectSeatPage = () => {

    const navigation = useNavigation<any>()
    const handleButton = () => {
        navigation.navigate("PaymentPage")
    }
    const render =
        ({ item }: any) =>
            <SeatInfoCard
                text={item.text}
                image={item.image}
            />
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
            <View style={style.infoSeatView}>
                <Text style={style.infoSeatViewText}>
                    Seçtiğiniz Koltuklar :
                </Text>
                <Image source={EmptySeat} style={{ width: 24, height: 24, resizeMode: "center", marginRight: 5 }} />
                <Image source={EmptySeat} style={{ width: 24, height: 24, resizeMode: "center", marginRight: 5 }} />
                <Image source={EmptySeat} style={{ width: 24, height: 24, resizeMode: "center", marginRight: 5 }} />
                <Image source={EmptySeat} style={{ width: 24, height: 24, resizeMode: "center", marginRight: 5 }} />
            </View>
            <CustomButton
                title='Onayla'
                onClick={handleButton}
            />
        </View>
    )
}