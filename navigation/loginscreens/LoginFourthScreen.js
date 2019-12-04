import Modal from 'react-native-modal'
import React, {Component} from 'react';
import {View, Text,TextInput,TouchableOpacity, Keyboard} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal'
import {t} from 'react-native-tailwindcss'
import LottieView from 'lottie-react-native'

class LoginFourthScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            cca2: 'BE',
            flag: 'flag-be', 
            callingCode: '32',
            numberLength: '' 
        }
    }    
    render(){
        console.log(this.state.numberLength)
        const nextButton = () =>{
            if(this.state.numberLength.length < 9 || this.state.numberLength.length > 9){
                return(
                    <TouchableOpacity style={[t.pY3, t.rounded, t.bgGray300, t.mT4]}>
                        <Text style={[t.textCenter, t.fontSemibold, t.textLg, t.textWhite]}>Next</Text>
                    </TouchableOpacity>
                )
            }else{
                return(
                    <TouchableOpacity style={[t.pY3, t.rounded, t.bgGreen400, t.mT4]} onPress={()=>this.props.navigation.navigate('goToApp')}>
                        <Text style={[t.textCenter, t.fontSemibold, t.textLg, t.textWhite]}>Next</Text>
                    </TouchableOpacity>
                )
            }
    }
        return(
            <View style={[t.flex1, t.itemsCenter]}>
                    <View style={[t.mT32, t.mX20, t.itemsCenter]}>
                        <Text style={[t.fontBold, t.textXl, t.textCenter]}>We need your number to complete registration</Text>
                    </View>
                    <View style={[t.itemsCenter, t.mT20, t.flexRow, t.mX4]}>
                        <View style={[t.flexRow, t.itemsCenter, t.borderB, t.borderGreen500]}>
                            <CountryPicker
                                onSelect={(value)=> this.setState({
                                    cca2: value.cca2,
                                    callingCode: value.callingCode[0],
                                    flag: value.flag
                                    })}
                                countryCode={this.state.cca2}
                                cca2={this.state.cca2}
                                withCallingCode={true}
                                withFilter={true}
                                withAlphaFilter={true}
                                // callingCode={this.state.callingCode}
                                withFlag={true}
                            />
                            <Text style={[t.textLg]}>+{this.state.callingCode}</Text>
                        </View>
                        <View style={[t.mL4, t.borderB, t.pY2, t.borderGreen500]}>
                            <TextInput
                                placeholder='enter your mobile number'
                                keyboardType='numeric'
                                style={[t.textLg, t.trackingWidest]}
                                onChangeText={(text)=>this.setState({numberLength: text})}
                            ></TextInput>
                        </View>
                    </View>
                    <View style={[t.mX12, t.mT32]}>
                        <Text style={[t.textCenter, t.textGray600]}>By tapping Next you agree to the Terms of Service and Privacy Policy</Text>
                        {nextButton()}
                    </View>
                    <LottieView style={[t.w64, t.mLAuto, t.mRAuto]} source={require('../../assets/lottie/code-invite.json')} autoPlay loop={false}/>
            </View>
        )
    }
}

export default LoginFourthScreen