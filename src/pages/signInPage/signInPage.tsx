import { View, Text, StatusBar } from 'react-native'
import React, { useState } from 'react'
import style from './style'
import { CustomButton, CustomInput } from '../../components'
import Lottie from 'lottie-react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import colors from 'assets/colors/colors'
import { handleCreated } from 'firebase/auth'
import { BusLottie } from 'assets/index'

export const SignInPage = () => {

    const [email, SetEmail] = useState("")
    const [password, SetPassword] = useState("")
    const [checkPassword, SetCheckPassword] = useState("")
    const navigation = useNavigation<any>()

    const handleBack = () => {
        handleCreated(email, password, checkPassword, navigation)
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
                    onPress={handleBack}
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
                <CustomInput
                    changeText={(a) => SetCheckPassword(a)}
                    title='Password:'
                    placeHolder='********'
                />
                <View style={style.buttonView}>
                    <CustomButton
                        title='Sign in'
                        onClick={handleBack}
                    />
                </View>
                <Text style={style.haveAccountTxt}>
                    Already have an account ?{' '}
                    <Text
                        onPress={handleBack}
                        style={style.signUpTxt}>
                        Login
                    </Text>
                </Text>
            </View>
        </View>
    )
}
