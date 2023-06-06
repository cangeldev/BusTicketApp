import { View, StatusBar, FlatList } from 'react-native'
import React from 'react'
import colors from '../../assets/colors/colors'
import style from './style'
import { BusCard } from '../../components/cards/busCard'
import { BusList } from '../../utils/helper'
import { CustomHeader } from '../../components'
export const BusListPage = () => {

    const renderBusList = ({ item }: any) =>
        <BusCard
            price={item.price}
            time={item.time}
            duration={item.duration}
            image={item.company}
        />
    return (
        <View style={style.container}>
            <StatusBar
                backgroundColor={colors.buttonBackground}
                barStyle={"light-content"}
            />
            <CustomHeader />
            <View
                style={style.busListView}>
                <FlatList data={BusList}
                    renderItem={renderBusList}
                />
            </View>
        </View>
    )
}
