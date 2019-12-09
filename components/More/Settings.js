import React, {Component} from 'react'
import {View, Text, Switch , Image, ScrollView, TouchableOpacity} from 'react-native';
import {t} from 'react-native-tailwindcss'
class Settings extends Component{
    constructor(props){
        super(props)
        this.state = {
            pushNotificationsFirstSwitch: true,
            pushNotificationsSecondSwitch: true,
            SMSnotificationsFirstSwitch: false,
            SMSnotificationsSecondSwitch: false,
        }
    }
    render(){
        return(
    <View style={[t.flex1, t.bgGray200]}>
        <ScrollView>
            <Text style={[t.fontSemibold, t.text2xl, t.mL4, t.mT8, t.mB3]}>Push notifications</Text>
                <View style={[t.flexRow, t.pL4, t.pY4, t.bgWhite, t.itemsCenter, t.borderY, t.borderGray200]}>
                <Text style={[t.textLg]}>Incident opened</Text>
                    <Switch
                    style={[t.mLAuto, t.mR4]}
                     value={this.state.pushNotificationsFirstSwitch} 
                     onValueChange={() => this.setState({pushNotificationsFirstSwitch: !this.state.pushNotificationsFirstSwitch})}>
                     </Switch>
                </View>
                <View style={[t.flexRow, t.pL4, t.pY4, t.bgWhite, t.itemsCenter,  t.borderY, t.borderGray200]}>
                    <Text style={[t.textLg]}>Incident updated</Text>
                    <Switch
                    style={[t.mLAuto, t.mR4]} 
                    value={this.state.pushNotificationsSecondSwitch} 
                    onValueChange={() => this.setState({pushNotificationsSecondSwitch: !this.state.pushNotificationsSecondSwitch})}>
                    </Switch>
                </View>

            <Text style={[t.fontSemibold, t.text2xl, t.mL4, t.mT8, t.mB3]}>SMS Notifications</Text>
                <View style={[t.flexRow, t.pL4, t.pY4, t.bgWhite, t.itemsCenter, t.borderY, t.borderGray200]}>
                    <Text style={[t.textLg]}>Incident opened</Text>
                    <Switch
                    style={[t.mLAuto, t.mR4]} 
                    value={this.state.SMSnotificationsFirstSwitch} 
                    onValueChange={() => this.setState({SMSnotificationsFirstSwitch: !this.state.SMSnotificationsFirstSwitch})}>
                    </Switch>
                </View>
                <View style={[t.flexRow, t.pL4, t.pY4, t.bgWhite, t.itemsCenter, t.borderY, t.borderGray200]}>
                    <Text style={[t.textLg]}>Incident opened</Text>
                    <Switch
                    style={[t.mLAuto, t.mR4]} 
                    value={this.state.SMSnotificationsSecondSwitch} 
                    onValueChange={() => this.setState({SMSnotificationsSecondSwitch: !this.state.SMSnotificationsSecondSwitch})}>
                    </Switch>
                </View>
            <Text style={[t.fontSemibold, t.text2xl, t.mL4, t.mT8, t.mB3]}>Legal</Text>
            <View>
                <TouchableOpacity style={[t.flexRow, t.pL4, t.pY4, t.bgWhite, t.itemsCenter, t.borderY, t.borderGray200]}>
                    <Text style={[t.textLg]}>Terms & conditions</Text>
                    <Image style={[t.objectContain, t.w4, t.h4, t.mLAuto, t.mR4]} source={require('../../img/arrow-point-to-right.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={[t.flexRow, t.pL4, t.pY4, t.bgWhite, t.itemsCenter, t.borderY, t.borderGray200]}>
                    <Text style={[t.textLg]}>Privacy policy</Text>
                    <Image style={[t.objectContain, t.w4, t.h4, t.mLAuto, t.mR4]} source={require('../../img/arrow-point-to-right.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={[t.flexRow, t.pL4, t.pY4, t.bgWhite, t.itemsCenter, t.borderY, t.borderGray200]}>
                    <Text style={[t.textLg]}>Acknowledgements</Text>
                    <Image style={[t.objectContain, t.w4, t.h4, t.mLAuto, t.mR4]} source={require('../../img/arrow-point-to-right.png')}></Image>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </View>)
            
    }
}
export default Settings



