import { View, Text } from 'react-native'
import React from 'react'
import { LoginPage } from '../loginPage'
import { SignInPage } from '../signInPage/signInPage'

export const Container = () => {
    return (
        <View style={{ flex: 1 }}>
            <SignInPage />
        </View>
    )
}