import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {t} from 'react-native-tailwindcss'
import LottieView from 'lottie-react-native'

class LoginFirstScreen extends Component {
    constructor(props){
        super(props)
    }    
    render(){
        return(
            <View style={[t.flex1, t.justifyCenter, t.itemsCenter, {backgroundColor: '#2ecb6f'}]}>
                <Image style={[t.objectContain, t.w4_5]} source={require('../../img/phone-pic.png')}></Image>
                <View style={[t.itemsCenter, t.justifyCenter, t.bottom0, t.mB64, t.pX12]}>
                    <Text style={[t.text3xl, t.fontExtrabold, t.textWhite, t.textCenter]}>Easy & simple reporting</Text>
                    <Text style={[t.textCenter, t.textWhite, t.pT4, t.fontNormal]}>just two taps to report hazards, near-miss, maintenance and more</Text>
                </View>
                <TouchableOpacity style={[t.w32, t.h32, t.absolute, {bottom:20, right:20}]} onPress={() => this.props.navigation.navigate('secondLogin')}>
                    <LottieView source={require('../../assets/lottie/9236-right-arrow.json')} autoPlay duration={3500} />
                </TouchableOpacity>
            </View>
        )
    }
}
export default LoginFirstScreen