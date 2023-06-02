import { View, Text } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import SelectDropdown from 'react-native-select-dropdown'
import { CityList } from '../../utils/helper'
import Icon from 'react-native-vector-icons/FontAwesome5'

interface ICityDropDown {
    title: string
}

export const CityDropdown: FC<ICityDropDown> = ({ title }) => {
    return (
        <View style={style.container}>
            <SelectDropdown
                //defaultValue={"Adana"}
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
                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {

                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                }}
            />
            <Text style={style.title}>
                {title}
            </Text>
        </View >
    )
}
