import { View, Text, FlatList, StatusBar } from 'react-native'
import React from 'react'
import style from './style'
import { CustomButton, CustomInput, Divider } from '../components'
import { BusLottie } from '../assets'
import { AnotherLoginList } from '../utils/helper'
import { AnotherLoginCard } from '../components/cards'
import Lottie from 'lottie-react-native'
import colors from '../assets/colors/colors'
import Icon from 'react-native-vector-icons/AntDesign';
export const LoginPage = () => {
    const render = ({ item }: any) => <AnotherLoginCard image={item.value} />

    return (
        <View style={style.container}>
            <StatusBar
                backgroundColor={colors.buttonBackground}
                barStyle={"light-content"}
            />
            <View style={style.titleView}>
                <Icon name="arrowleft" size={30} color={colors.white} style={style.backIcon} />
                <Text style={style.title}>
                    BiletFırsatı
                    <Text style={style.titleExt}>
                        .com
                    </Text>
                </Text>
            </View>
            <Lottie
                source={BusLottie}
                autoPlay
                loop
                style={style.busLottie}
            />
            <View style={style.contentView}>
                <CustomInput
                    title='Email:'
                    placeHolder='example@gmail.com'
                />
                <CustomInput
                    title='Password:'
                    placeHolder='********'
                />
                <Text style={style.forgotPasswordTxt}>
                    Forgot Password?
                </Text>
                <View style={style.buttonView}>
                    <CustomButton title='Log in' />
                </View>
                <Divider />
                <View style={style.anotherLoginView}>
                    <FlatList
                        data={AnotherLoginList}
                        renderItem={render}
                        horizontal />
                </View>
                <Text style={style.haveAccountTxt}>
                    Don't have an account?{' '}
                    <Text style={style.signUpTxt}>
                        Sign up
                    </Text>
                </Text>
            </View>
        </View>
    )
}
