import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';
import {t} from 'react-native-tailwindcss'
import {connect} from 'react-redux'
import { loginAPIcall } from '../../redux/actions/loginAPIcall'
import { loginVSregister } from '../../navigation/reduxnavigation/actions/loginVSregister'
import LottieView from 'lottie-react-native'
class RegisterScreen extends Component {
    constructor(props){
        super(props)
        this.state ={
            email: null,
            password: null,
            success: false,
            renderStopper: 0
        }
    }

    createNewUser = () => {
        this.props.loginAPIcall({type: 'register', email: this.state.email, password: this.state.password})
    }    

    checkCredentials = () => {
        if(this.state.email || this.state.password){
            if(this.state.email.length > 6 && this.state.password.length > 6){
                this.createNewUser()
            } else {
                alert('Your email/password is to short, please try again')
            }
        } else{
            null
        }
    }

    nextScreenAnimation = () => {
        if(this.state.renderStopper === 0){
            this.setState({renderStopper: this.state.renderStopper + 1})
            this.setState({success: true})
            setTimeout(()=> {this.props.navigation.navigate('firstLogin')},2000)
        }
    }

   render(){
       console.log(this.state.success, 'testing the succes')
        if(this.props.api.apiCalling){
            if(this.props.api.loginStatus.json.message){
                console.log('failerd')
            }else{
                console.log('hit')
                this.nextScreenAnimation()
            }
        }
        return(
            <View style={[t.flex1, t.justifyCenter, t.itemsCenter, {backgroundColor: '#384661'}]}>
            {this.state.success ? <LottieView style={[t.z50]} source={require('../../assets/lottie/success-animation.json')} autoPlay loop={false}/> : null}
                <View style={[t.mB20, t.w3_4, t.itemsCenter]}>
                    <Image style={[t.objectContain, t.w4_12, t.h40]} source={require('../../img/prevent.png')}></Image>
                    <Text style={[t.trackingTighter,t.textXl, t.fontLight, t.trackingWider,{color: "#a5b3ca", marginTop: -8}]}>Pointbreak</Text>
                </View>
                <View style={[{borderBottomColor: '#a5b3ca', borderBottomWidth: 1}, t.flexRow, t.itemsCenter]}>
                    <Image source={require('../../img/envelope.png')} style={[t.w5, t.h5, t.objectContain, t.mR2]}></Image>
                    <TextInput placeholderTextColor="#a5b3ca" 
                    style={
                        [t.w40,
                        t.pT2,
                        t.justifyCenter, 
                        t.textLg, 
                        t.fontLight, 
                        t.trackingWider, 
                        t.mB1, 
                        t.rounded,
                        t.pB1, 
                        {color: '#a5b3ca'}]} 
                        placeholder='email' 
                        onChangeText={(text)=>this.setState({email: text})}>
            
                    </TextInput>
                </View>
                <View style={[{borderBottomColor: '#a5b3ca', borderBottomWidth: 1}, t.flexRow, t.itemsCenter]}>
                    <Image source={require('../../img/lock.png')} style={[t.w5, t.h5, t.objectContain, t.mR2]}></Image>
                    <TextInput 
                    placeholderTextColor="#a5b3ca" 
                    secureTextEntry={true} 
                    style={
                        [t.w40, 
                        t.pT2, 
                        t.justifyCenter, 
                        t.textLg, 
                        t.fontLight, 
                        t.trackingWider, 
                        t.mB1, 
                        t.rounded,
                        t.pB1, 
                        {color: '#a5b3ca'}]} 
                        placeholder='password' 
                        onChangeText={(text)=>this.setState({password: text})}>

                    </TextInput>
                </View>
                <TouchableOpacity style={[t.pY1, t.pX3, t.roundedLg, t.mT2, t.pX12, t.mT8,{backgroundColor: '#fcd770'} ]}  onPress={this.checkCredentials}>
                    <Text style={[t.trackingWide, t.text2xl, {color: '#d09d76'}]}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                 
                    <Text style={[t.mT12, {color: '#a5b3ca'}]}>Already have an account yet?{"\n"}Please login here</Text>
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
