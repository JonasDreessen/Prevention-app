import React, {Component} from 'react';
import {Modal,View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {t} from 'react-native-tailwindcss'

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
            </View>
        )
    }
}

export default LoginSecondScreen