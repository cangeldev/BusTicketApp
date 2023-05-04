import { View, Text } from 'react-native'
import React from 'react'
import { LoginPage } from '../loginPage'

export const Container = () => {
    return (
        <View style={{ flex: 1 }}>
            <LoginPage />
        </View>
    )
}