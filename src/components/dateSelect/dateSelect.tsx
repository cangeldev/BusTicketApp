import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker'
import style from './style'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';

export const DateSelect = () => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    const formatDate = (date: any) => {
        const day = date.getDate();
        return day.toString();
    }
    const getDayText = (date: any) => {
        const day = date.getDay();
        const dayNames = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
        const dayText = dayNames[day];
        return dayText;
    };
    const getMonthText = (date: any) => {
        const month = date.getMonth();
        const monthNames = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
        const monthText = monthNames[month];
        return monthText;
    };
    return (
        <>
            <TouchableOpacity
                onPress={() => setOpen(true)}
                style={style.selectDateView}>
                <Text >
                    Gidiş Tarihi Seçiniz:
                </Text>
                <View style={style.innerDateView}>
                    <Text style={style.day}>
                        {formatDate(date)}
                    </Text>
                    <View>
                        <Text style={style.dateTxt}>
                            {getMonthText(date)}
                        </Text>
                        <Text style={style.dateTxt}>
                            {getDayText(date)}
                        </Text>
                    </View>
                    <IconM
                        name="calendar-month"
                        size={40}
                        style={style.dateIcon}
                    />
                </View>
            </TouchableOpacity>
            <DatePicker
                cancelText='İptal'
                confirmText='Onayla'
                title={"Lütfen Tarih Seçiniz:"}
                mode='date'
                modal
                open={open}
                date={date}
                onConfirm={(selectedDate) => {
                    setOpen(false)
                    setDate(selectedDate)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
        </>
    )
}
