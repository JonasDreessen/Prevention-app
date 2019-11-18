import React, {Component} from 'react'
import {View, Text, Image} from 'react-native';
import {t} from 'react-native-tailwindcss'



class NoIncidentsReported extends Component {
    render(){
        return(
            <View style={[t.flex1, t.justifyCenter, t.itemsCenter]}>
                <View style={[t.bgGray200, t.p6, t.roundedFull]}>
                    <Image style={[t.selfAuto, t.w40, t.h40, t.objectContain]} source={require('../../img/like.png')}></Image>
                </View>
                <Text style={[t.textXl, t.fontBold, t.pT6, t.pB2, t.textCenter]}>No open incidents</Text>
                <Text style={[t.textCenter, t.textLg]}>Open a new incident by tapping the +{"\n"}button below</Text>
            </View>        
        )
    }
}
export default NoIncidentsReported