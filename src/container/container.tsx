import { View } from 'react-native'
import React from 'react'
import { BusListPage, HomePage, PaymentPage, SelectSeatPage } from '../pages'

export const Container = () => {
    return (
        <View style={{ flex: 1 }}>
            {/* <HomePage /> */}
            {/* <BusListPage /> */}
            {/* <SelectSeatPage /> */}
            <PaymentPage />
        </View>
    )
}