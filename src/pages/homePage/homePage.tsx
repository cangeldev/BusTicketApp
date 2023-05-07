import { View, Text, FlatList, StatusBar } from 'react-native'
import React from 'react'
import style from './style'
import Icon from 'react-native-vector-icons/Ionicons';
import { VehicleCard } from '../../components/cards';
import { VehicleList } from '../../utils/helper';
import colors from '../../assets/colors/colors';
import { SelectTicketButton } from '../../components';

export const HomePage = () => {
    const [selectedItemId, setSelectedItemId] = React.useState(null);
    const render = ({ item }: any) =>
        <VehicleCard
            title={item.title}
            vehicle={item.vehicle}
            id={item.id}
            selectedItemId={selectedItemId as any}
            onClick={() => setSelectedItemId(item.id)}
        />
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
                <View style={style.selectTicketView}>
                    <SelectTicketButton
                        title='Nereden'
                        placeHolder="Lütfen İl veya İlçe Seçiniz"
                    />
                    <SelectTicketButton
                        title='Nereye'
                        placeHolder="Lütfen İl veya İlçe Seçiniz"
                    />
                    <View style={style.changeTicketIconView}>
                        <Icon
                            name="swap-vertical"
                            size={26}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}
