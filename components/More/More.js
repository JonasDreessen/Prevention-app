import React, {Component} from 'react';
import {View, Text, StyleSheet, Image,TouchableOpacity, ScrollView} from 'react-native';
import {t} from 'react-native-tailwindcss'

class More extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <ScrollView>
                <View style={[t.flex1, t.bgWhite]}>
                    <View style={[t.pX6, t.mT8]}>
                        <TouchableOpacity>
                            <Text style={[t.text2xl, t.fontBold, t.trackingWider]}>Jonas Dreessen</Text>
                            <Text style={[t.textLg, t.textGray600, t.mT2]}>pointbreak</Text>
                            <Text style={[t.textBase, t.mT2]}>view and edit account</Text>
                            <View style={[t.roundedFull, t.bgRed800, t.mLAuto, t.mT2, t.p4, t.absolute, t.right0]}>
                                <Text style={[t.textWhite, t.fontExtrabold, t.text3xl]}>JD</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={[t.justifyBetween, t.mT6]}>
                            <TouchableOpacity style={[t.flexRow, t.borderB, t.pY6, t.borderGray400, t.itemsCenter]} onPress={() => this.props.navigation.navigate('YourTeam')} >
                                <Image source={require('../../img/group.png')} style={[t.mR5]}></Image>
                                <View>
                                    <Text style={[t.textLg]}>Your team</Text>
                                    <Text style={[t.textSm, t.textGray600, t.mT1]}>Invite your team members</Text>
                                </View>
                                <Image source={require('../../img/arrow-point-to-right.png')} style={[t.w4, t.h4, t.objectContain, t.mLAuto]}></Image>
                            </TouchableOpacity>

                            <TouchableOpacity style={[t.flexRow, t.borderB, t.pY6, t.borderGray400, t.itemsCenter]}  onPress={() => this.props.navigation.navigate('Incident settings')}>
                                <Image source={require('../../img/marketing.png')} style={[t.mR5]}></Image>
                                <View style={{flexDirection: 'column'}}>
                                    <Text style={[t.textLg]}>Incident settings</Text>
                                    <Text style={[t.textSm, t.textGray600, t.mT1]}>Customise tags and inputs</Text>
                                </View>
                                <Image source={require('../../img/arrow-point-to-right.png')} style={[t.w4, t.h4, t.objectContain, t.mLAuto]}></Image>
                            </TouchableOpacity>

                            <TouchableOpacity style={[t.flexRow, t.borderB, t.pY8, t.borderGray400, t.itemsCenter]}  onPress={() => this.props.navigation.openDrawer()}>
                                <Image source={require('../../img/sort.png')} style={[t.mR5]}></Image>
                                <View style={{flexDirection: 'column'}}>
                                    <Text style={[t.textLg]}>Switch Team</Text>                               
                                </View>
                                <Image source={require('../../img/arrow-point-to-right.png')} style={[t.w4, t.h4, t.objectContain, t.mLAuto]}></Image>
                            </TouchableOpacity>

                            <TouchableOpacity style={[t.flexRow, t.borderB, t.pY8, t.borderGray400, t.itemsCenter]} onPress={() => this.props.navigation.navigate('Help & support')}>
                                <Image source={require('../../img/lifebuoy.png')} style={[t.mR5]}></Image>
                                <View style={{flexDirection: 'column'}}>
                                    <Text style={[t.textLg]}>Help & support</Text>
                                </View>
                                <Image source={require('../../img/arrow-point-to-right.png')} style={[t.w4, t.h4, t.objectContain, t.mLAuto]}></Image>
                            </TouchableOpacity>

                            <TouchableOpacity style={[t.flexRow, t.borderB, t.pY8, t.borderGray400, t.itemsCenter]} onPress={() => this.props.navigation.navigate('Settings')}>
                                <Image source={require('../../img/settings.png')} style={[t.mR5]}></Image>
                                <View style={{flexDirection: 'column'}}>
                                    <Text style={[t.textLg]}>Settings</Text>
                                </View>
                                <Image source={require('../../img/arrow-point-to-right.png')} style={[t.w4, t.h4, t.objectContain, t.mLAuto]}></Image>
                            </TouchableOpacity>
                            
                            
                            <TouchableOpacity style={[t.flexRow, t.pY8, t.borderGray400, t.itemsCenter, t.mL1]}>
                                <View style={[t.flexRow]}>
                                    <Image source={require('../../img/exit-door.png')} style={{width: 26, height: 26, marginRight: 20}}></Image>
                                    <View style={{flexDirection: 'column'}}>
                                    <Text style={[t.textLg, t.textRed600]}>Sign out</Text>
                                    </View>

                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
export default More
