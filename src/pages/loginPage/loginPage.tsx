import { View, Text, FlatList, StatusBar, BackHandler } from 'react-native'
import React from 'react'
import style from './style'
import { CustomButton, CustomInput, Divider } from '../../components'
import Lottie from 'lottie-react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native'
import { AnotherLoginCard } from 'components/cards'
import { AnotherLoginList } from 'utils/helper'
import { BusLottie } from 'assets/index'
import colors from 'assets/colors/colors'
import { useDispatch } from "react-redux"
import { addEmail, addPassword } from 'features/userSlice'

export const LoginPage = () => {
    const dispatch = useDispatch()
    const [email, SetEmail] = React.useState("")
    const [password, SetPassword] = React.useState("")

    const navigation = useNavigation<any>()
    const render = ({ item }: any) =>
        <AnotherLoginCard image={item.value}
        />
    const handleExit = () => {
        BackHandler.exitApp()
    }
    const handleLogin = () => {
        dispatch(addEmail(email))
        navigation.navigate("HomePage")
    
    }
    const handleSignIn = () => {
        navigation.navigate("SignInPage")
    }

    return (
        <View style={style.container}>
            <StatusBar
                backgroundColor={colors.buttonBackground}
                barStyle={"light-content"}
            />
            <View style={style.titleView}>
                <Icon name="arrowleft"
                    size={30}
                    color={colors.white}
                    style={style.backIcon}
                    onPress={handleExit}
                />
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
                    changeText={(a) => SetEmail(a)}
                    title='Email:'
                    placeHolder='example@gmail.com'
                />
                <CustomInput
                    changeText={(a) => SetPassword(a)}
                    title='Password:'
                    placeHolder='********'
                />
                <Text style={style.forgotPasswordTxt}>
                    Forgot Password?
                </Text>
                <View style={style.buttonView}>
                    <CustomButton title='Log in'
                        onClick={handleLogin}
                    />
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
                    <Text
                        onPress={handleSignIn}
                        style={style.signUpTxt}>
                        Sign up
                    </Text>
                </Text>
            </View>
        </View>
    )
}
