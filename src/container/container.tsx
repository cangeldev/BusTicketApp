import { View } from 'react-native'
import React from 'react'
import { BusListPage, HomePage, LoginPage, PaymentPage, SelectSeatPage, SignInPage } from 'pages'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import auth from '@react-native-firebase/auth';

export const Container = () => {
    const user = auth().currentUser;
    const Stack = createNativeStackNavigator()
    return (
        <View style={{ flex: 1 }}>

            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{ headerShown: false }}
                    initialRouteName={user ? "HomePage" : "LoginPage"}>
                    <Stack.Screen
                        name='LoginPage'
                        component={LoginPage}
                    />
                    <Stack.Screen
                        name='SignInPage'
                        component={SignInPage}
                    />
                    <Stack.Screen
                        name='HomePage'
                        component={HomePage}
                    />
                    <Stack.Screen
                        name='BusListPage'
                        component={BusListPage}
                    />
                    <Stack.Screen
                        name='SelectSeatPage'
                        component={SelectSeatPage}
                    />
                    <Stack.Screen
                        name='PaymentPage'
                        component={PaymentPage}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
}