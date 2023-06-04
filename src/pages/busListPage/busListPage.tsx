import { View, Text, StatusBar, FlatList } from 'react-native'
import React from 'react'
import colors from '../../assets/colors/colors'
import style from './style'
import Icon from 'react-native-vector-icons/AntDesign'
import { BusCard } from '../../components/cards/busCard'
import { BusList } from '../../utils/helper'
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
            <View style={style.header}>
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
                    2 Haziran Cuma
                </Text>
            </View>
            <View
                style={style.busListView}>
                <FlatList data={BusList}
                    renderItem={renderBusList}
                />
            </View>
        </View>
    )
}
