import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {t} from 'react-native-tailwindcss'

class LoginFirstScreen extends Component {
    constructor(props){
        super(props)
    }    
    render(){
        return(
            <View style={[t.flex1, t.bgGreen400, t.justifyCenter, t.itemsCenter]}>
                <Image style={[t.objectContain, t.w4_5]} source={require('../../img/phone-pic.png')}></Image>
                <View style={[t.itemsCenter, t.justifyCenter, t.bottom0, t.mB64, t.pX12]}>
                    <Text style={[t.text3xl, t.fontExtrabold, t.textWhite, t.textCenter]}>Easy & simple reporting</Text>
                    <Text style={[t.textCenter, t.textWhite, t.pT4, t.fontNormal]}>just two taps to report hazards, near-miss, maintenance and more</Text>
                </View>
            </View>
        )
    }
}

export default LoginFirstScreen