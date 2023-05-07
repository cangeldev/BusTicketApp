import { View, Text, FlatList, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import style from './style'
import Icon from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import { VehicleCard } from '../../components/cards';
import { VehicleList } from '../../utils/helper';
import colors from '../../assets/colors/colors';
import { CustomButton, SelectTicketButton, WeatherView } from '../../components';

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
                <Text style={style.weatherTitle}>
                    Tahmini Hava Durumu
                </Text>
                <View style={style.weatherConteiner}>
                    <WeatherView title=' Nereden' place="İstanbul" />
                    <WeatherView title='Nereye' place="Ankara" />
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
                <TouchableOpacity style={style.selectDateView}>
                    <Text >
                        Gidiş Tarihi Seçiniz:
                    </Text>
                    <View style={style.innerDateView}>
                        <Text style={style.day}>
                            8
                        </Text>
                        <View>
                            <Text style={style.dateTxt}>
                                Mayıs
                            </Text>
                            <Text style={style.dateTxt}>
                                Pazartesi
                            </Text>
                        </View>
                        <IconM
                            name="calendar-month"
                            size={30}
                            style={style.dateIcon}
                        />
                    </View>
                </TouchableOpacity>
                <CustomButton title='Ucuz Bilet Bul' />
            </View>
        </View>
    )
}
