import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native';
import Modal from 'react-native-modal'
import {t} from 'react-native-tailwindcss'
class HelpAndSupport extends Component{
    constructor(props){
        super(props)
    }
    render(){
    // -- this is for simulation purposes. in a full build act it would receive messages from users and display answers with Q&A about the app -- //
        return(
    <View style={[t.flex1]}>
        <Modal
                animationType='slide'
                animationInTiming={550}
                transparent={true}
                backdropOpacity={0}
                coverScreen={false}
                style={[t.m0]}
                isVisible={true}>

            <View style={[t.flex1, t.mT10]}>
                <Text style={[t.textCenter,  t.text2xl, t.fontSemibold]}> No conversations</Text>
                <Text style={[t.textCenter, t.textBase, t.mT3]}>you have no conversations with the pointbreak developers. </Text>
                <Text style={[t.textCenter, t.text4xl, t.textGray600]}>...</Text>
            </View>
        </Modal>
    </View>)
            
    }
}


export default HelpAndSupport



