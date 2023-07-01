import { View, StatusBar, FlatList } from 'react-native'
import React from 'react'
import style from './style'
import colors from 'assets/colors/colors'
import { BusList } from 'utils/helper'
import { BusCard } from 'components/cards'
import { CustomHeader } from 'components/customHeader'

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
