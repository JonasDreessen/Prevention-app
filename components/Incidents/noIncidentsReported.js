import React, {Component} from 'react'
import {View, Text, Image} from 'react-native';
import {t} from 'react-native-tailwindcss'
import LottieView from 'lottie-react-native'


class NoIncidentsReported extends Component {
    render(){
        // -- this will be displayed when the app is opened and there are no incident reported yet. -- //
        return(
            <View style={[t.flex1, t.justifyCenter, t.itemsCenter]}>
                    <LottieView style={[t.selfAuto, t.w40, t.h40, t.objectContain]} source={require('../../assets/lottie/1868-confirmation.json')} autoPlay duration={5000}></LottieView>
                <Text style={[t.textXl, t.fontBold, t.pT6, t.pB2, t.textCenter]}>No open incidents</Text>
                <Text style={[t.textCenter, t.textLg]}>Open a new incident by tapping the +{"\n"}button below</Text>
            </View>        
        )
    }
}
export default NoIncidentsReported