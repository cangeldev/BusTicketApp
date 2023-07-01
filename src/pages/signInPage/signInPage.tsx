import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import style from './style'
import { CustomButton, CustomInput } from '../../components'
import { BusLottie } from '../../assets'
import Lottie from 'lottie-react-native'
import colors from '../../assets/colors/colors'
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'

export const SignInPage = () => {
    const navigation = useNavigation<any>()
    const handleBack = () => {
        navigation.navigate("LoginPage")
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
                    title='Email:'
                    placeHolder='example@gmail.com'
                />
                <CustomInput
                    title='Password:'
                    placeHolder='********'
                />
                <CustomInput
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
