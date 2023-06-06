import { View } from 'react-native'
import React from 'react'
import { BusListPage, HomePage, SelectSeatPage } from '../pages'

export const Container = () => {
    return (
        <View style={{ flex: 1 }}>
             <HomePage /> 
            {/* <BusListPage /> */}
            {/* <SelectSeatPage /> */}
        </View>
    )
}