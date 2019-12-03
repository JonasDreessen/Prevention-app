import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';
import {t} from 'react-native-tailwindcss'
import {connect} from 'react-redux'
import { loginAPIcall } from '../../redux/actions/loginAPIcall'
import { loginVSregister } from '../../navigation/reduxnavigation/actions/loginVSregister'

class RegisterScreen extends Component {
    constructor(props){
        super(props)
        this.state ={
            email: null,
            password: null
        }
    }

    createNewUser = () => {
        this.props.loginAPIcall({type: 'register', email: this.state.email, password: this.state.password})
    }    

    checkCredentials = () => {
       if(this.state.email.length > 6 && this.state.password.length > 6){
        this.createNewUser()
    } else {
        alert('Your email/password is to short, please try again')
    }
}
   render(){
        if(this.props.api.apiCalling){
            if(this.props.api.loginStatus.json.message){
                console.log('failerd')
            }else{
                this.props.navigation.navigate('secondLogin')
            }
        }
        return(
            <View style={[t.flex1, t.justifyCenter, t.itemsCenter, {backgroundColor: '#12113C'}]}>
            <View style={[t.mB20, t.w3_4, t.itemsCenter]}>
                <Image style={[t.objectContain, t.maxWFull]} source={require('../../img/Pointbreak-Logo-wit.png')}></Image>
                <Text style={[t.mT4, t.textLg, t.fontSemibold,t.textWhite, t.trackingWider]}>Register</Text>
            </View>
                <TextInput style={[t.border, t.w40, t.borderGray300, t.bgWhite, t.textCenter, t.pT2, t.justifyCenter, t.textLg, t.fontSemibold, t.trackingWider, t.mB1, t.rounded, t.pY0]} placeholder='email' onChangeText={(text)=>this.setState({email: text})}></TextInput>
                <TextInput secureTextEntry={true} style={[t.border, t.w40, t.borderGray300, t.bgWhite, t.textCenter, t.pT2, t.justifyCenter, t.textLg, t.fontSemibold, t.trackingWider, t.rounded]} placeholder='password' onChangeText={(text)=>this.setState({password: text})}></TextInput>
                <TouchableOpacity style={[t.pY1, t.pX3, t.roundedLg, t.mT2]} onPress={this.checkCredentials}>
                    <Text style={[t.fontExtrabold, t.textWhite, t.trackingWide, t.textLg]}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={[t.textWhite, t.mT12]}>Already have an account yet? Please login here</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        api: state.addAPIcall,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginAPIcall: (payload) => dispatch(loginAPIcall(payload)),
        loginVSregister: (payload) => dispatch(loginVSregister(payload)),  
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    )(RegisterScreen)
