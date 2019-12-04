import React, {Component} from 'react';
import {Modal,View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {t} from 'react-native-tailwindcss'
import LottieView from 'lottie-react-native'

class LoginThirdScreen extends Component {
    constructor(props){
        super(props)
    }    
    render(){
        return(
            <View style={[t.flex1, t.bgWhite, t.justifyCenter, t.itemsCenter, t.justifyAround]}>
                <Image style={[t.objectContain, t.w4_5]} source={require('../../img/phone-pic3.png')}></Image>
                <View style={[t.itemsCenter, t.justifyCenter, t.mB64, t.pX16]}>
                    <Text style={[t.text3xl, t.fontExtrabold, t.textCenter]}>Analyze and prevent</Text>
                    <Text style={[t.textCenter, t.pT4, t.fontNormal]}>Analyze and export all reported issues to spot trends an fix common problems</Text>
                    <TouchableOpacity style={[t.bgGreen400, t.pX8, t.pY3, t.rounded, t.mT4]} onPress={()=>this.props.navigation.navigate('fourthLogin')}>
                        <Text style={[t.fontBold, t.textWhite]}>Get Started</Text>
                    </TouchableOpacity>
                </View>    
            </View>
        )
    }
}

export default LoginThirdScreen