import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';
import {t} from 'react-native-tailwindcss'

class RegisterScreen extends Component {
    constructor(props){
        super(props)
        this.state ={
            email: null,
            password: null
        }
    }    
    render(){
        console.log(this.state.email, this.state.password)
        return(
            <View style={[t.flex1, t.bgGray100, t.justifyCenter, t.itemsCenter]}>
            <View style={[t.mB20, t.w3_4, t.itemsCenter]}>
                <Image style={[t.objectContain, t.maxWFull]} source={require('../../img/Pointbreak-Logo.png')}></Image>
                <Text style={[t.mT4, t.textLg, t.fontSemibold, t.textGreen600, t.trackingWider]}>Log in or register</Text>
            </View>
            
                <TextInput style={[t.border, t.w40, t.borderGray300, t.bgWhite, t.textCenter, t.pT2, t.justifyCenter, t.textLg, t.fontSemibold, t.trackingWider, t.mB1, t.rounded]} placeholder='email' onChangeText={(text)=>this.setState({email: text})}></TextInput>
                <TextInput secureTextEntry={true} style={[t.border, t.w40, t.borderGray300, t.bgWhite, t.textCenter, t.pT2, t.justifyCenter, t.textLg, t.fontSemibold, t.trackingWider, t.rounded]} placeholder='password' onChangeText={(text)=>this.setState({password: text})}></TextInput>
                <TouchableOpacity style={[t.bgGreen600, t.pY1, t.pX3, t.roundedLg, t.mT2]}>
                    <Text style={[t.fontExtrabold, t.textWhite, t.trackingWide, t.textLg]}>Log in</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default RegisterScreen