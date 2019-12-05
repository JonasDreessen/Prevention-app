import React, {Component} from 'react';
import {Modal,View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {t} from 'react-native-tailwindcss'
import LottieView from 'lottie-react-native'

class LoginSecondScreen extends Component {
    constructor(props){
        super(props)
    }    
    render(){
        return(
            <View style={[t.flex1, t.bgPurple900, t.justifyCenter, t.itemsCenter]}>
                <Image style={[t.objectContain, t.w4_5]} source={require('../../img/phone-pic2.png')}></Image>
                <View style={[t.itemsCenter, t.justifyCenter, t.bottom0, t.mB64, t.pX12]}>
                    <Text style={[t.text3xl, t.fontExtrabold, t.textWhite, t.textCenter]}>Real-time team collaboration</Text>
                    <Text style={[t.textCenter, t.textWhite, t.pT4, t.fontNormal]}>act immediately with real-time alerts. Communicate in the app.</Text>
                </View>
                <TouchableOpacity style={[t.w32, t.h32, t.absolute, {bottom:20, right:20}]} onPress={() => this.props.navigation.navigate('thirdLogin')}>
                    <LottieView source={require('../../assets/lottie/9236-right-arrow.json')} autoPlay duration={3500} />
                </TouchableOpacity>
            </View>
        )
    }
}

export default LoginSecondScreen