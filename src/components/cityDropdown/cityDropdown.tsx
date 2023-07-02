import { View, Text } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import SelectDropdown from 'react-native-select-dropdown'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { CityList } from 'utils/helper'
import { useDispatch } from "react-redux"
import { addFromCity, addToCity } from 'features/userSlice'

interface ICityDropDown {
    title: string
}

export const CityDropdown: FC<ICityDropDown> = ({ title }) => {
    const dispatch = useDispatch()
    return (
        <View style={style.container}>
            <SelectDropdown
                showsVerticalScrollIndicator={false}
                defaultButtonText='Lütfen İl veya İlçe Seçiniz'
                dropdownStyle={style.dropdownStyle}
                dropdownIconPosition='left'
                buttonTextStyle={style.buttonTextStyle}
                rowTextStyle={{ color: "grey" }}
                buttonStyle={style.buttonStyle}
                selectedRowTextStyle={style.selectedRowTextStyle}
                renderDropdownIcon={
                    () =>
                        <Icon
                            name="map-marker-alt"
                            size={18}
                        />
                }
                data={CityList}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                }}
                buttonTextAfterSelection={(selectedItem) => {
                    title == "Kalkış Noktası" ? dispatch(addFromCity(selectedItem)) : dispatch(addToCity(selectedItem))
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    return item
                }}
            />
            <Text style={style.title}>
                {title}
            </Text>
        </View >
    )
}
