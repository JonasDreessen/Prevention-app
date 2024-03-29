import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native';
import {t} from 'react-native-tailwindcss'
import { connect } from 'react-redux'


class TeamAlerts extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={t.flex1}>
                <View>
                    <View style={[t.mT8, t.mX6, t.borderB, t.borderGray400, t.pB4, t.pY1, t.flexRow, t.itemsCenter]}>
                        <Text style={[t.textLg, t.fontSemibold, t.trackingWide]}>Property Damage</Text>
                        <View style={[t.mLAuto, t.mR10, t.bgRed800, t.roundedFull, t.p1]}><Text style={[t.fontBold, t.textWhite]}>JD</Text></View>
                        <Image source={require('../img/arrow-point-to-right.png')} style={[t.w5, t.h5, t.objectContain]}></Image>
                    </View>
                    <View style={[t.mT8, t.mX6, t.borderB, t.borderGray400, t.pB4, t.pY1, t.flexRow, t.itemsCenter]}>
                        <Text style={[t.textLg, t.fontSemibold, t.trackingWide]}>Theft</Text>
                        <View style={[t.mLAuto, t.mR10, t.bgRed800, t.roundedFull, t.p1]}><Text style={[t.fontBold, t.textWhite]}>JD</Text></View>
                        <Image source={require('../img/arrow-point-to-right.png')} style={[t.w5, t.h5, t.objectContain]}></Image>
                    </View>
                    <View style={[t.mT8, t.mX6, t.borderB, t.borderGray400, t.pB4, t.pY1, t.flexRow, t.itemsCenter]}>
                        <Text style={[t.textLg, t.fontSemibold,t.trackingWide]}>Injury</Text>
                        <View style={[t.mLAuto, t.mR10, t.bgRed800, t.roundedFull, t.p1]}><Text style={[t.fontBold, t.textWhite]}>JD</Text></View>
                        <Image source={require('../img/arrow-point-to-right.png')} style={[t.w5, t.h5, t.objectContain]}></Image>
                    </View>
                    <View style={[t.mT8, t.mX6, t.borderB, t.borderGray400, t.pB4, t.pY1, t.flexRow, t.itemsCenter]}>
                        <Text style={[t.textLg, t.fontSemibold,t.trackingWide]}>Maintenance</Text>
                        <View style={[t.mLAuto, t.mR10, t.bgRed800, t.roundedFull, t.p1]}><Text style={[t.fontBold, t.textWhite]}>JD</Text></View>
                        <Image source={require('../img/arrow-point-to-right.png')} style={[t.w5, t.h5, t.objectContain]}></Image>
                    </View>
                    <View style={[t.mT8, t.mX6, t.borderB, t.borderGray400, t.pB4, t.pY1, t.flexRow, t.itemsCenter]}>
                        <Text style={[t.textLg, t.fontSemibold, t.trackingWide]}>Near Miss</Text>
                        <View style={[t.mLAuto, t.mR10, t.bgRed800, t.roundedFull, t.p1]}><Text style={[t.fontBold, t.textWhite]}>JD</Text></View>
                        <Image source={require('../img/arrow-point-to-right.png')} style={[t.w5, t.h5, t.objectContain]}></Image>
                    </View>
                    <View style={[t.mT8, t.mX6, t.borderB, t.borderGray400, t.pB4, t.pY1, t.flexRow, t.itemsCenter]}>
                        <Text style={[t.textLg, t.fontSemibold, t.trackingWide]}>Hazard</Text>
                        <View style={[t.mLAuto, t.mR10, t.bgRed800, t.roundedFull, t.p1]}><Text style={[t.fontBold, t.textWhite]}>JD</Text></View>
                        <Image source={require('../img/arrow-point-to-right.png')} style={[t.w5, t.h5, t.objectContain]}></Image>
                    </View>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        api: state.addAPIcall
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginAPIcall: (payload) => dispatch(loginAPIcall(payload)),  
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    )(TeamAlerts)
