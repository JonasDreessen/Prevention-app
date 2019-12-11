import React, {Component} from 'react'
import {View, Text, StyleSheet, Image} from 'react-native';
import {t} from 'react-native-tailwindcss'


class IncidentSettings extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
    <View style={[t.flex1, t.mX5]}>
        <View style={[t.mT5]}>
            <View style={[t.flexRow, t.itemsCenter, t.mB3]}>
                <Image source={require('../../img/price-tag.png')} style={[t.w6, t.mR5, t.objectContain]}></Image>
                <View>
                    <Text style={[t.textXl, t.fontSemibold]}>Tag management</Text>
                    <Text style={[t.textGray600, t.mT1]}>Customise incident type</Text>
                </View>
                <Image source={require('../../img/arrow-point-to-right.png')} style={styles.arrow}></Image>
            </View>
            <View style={[t.flexRow, t.itemsCenter, t.mB3]}>
                <Image source={require('../../img/up-arrow.png')} style={[t.w6, t.mR5, t.objectContain]}></Image>
                <View>
                    <Text style={[t.textXl, t.fontSemibold]}>Initial incident input</Text>
                    <Text style={[t.textGray600, t.mT1]}>First input to show after you opened an{"\n"}incident</Text>
                </View>
                <Image source={require('../../img/arrow-point-to-right.png')} style={styles.arrow}></Image>
            </View>
            <View style={[t.flexRow, t.itemsCenter, t.mB3]}>
                <Image source={require('../../img/brackets.png')} style={[t.w6, t.mR5, t.objectContain]}></Image>
                <View>
                    <Text style={[t.textXl, t.fontSemibold]}>Additional input</Text>
                    <Text style={[t.textGray600, t.mT1]}>Experimental</Text>
                </View>
                <Image source={require('../../img/arrow-point-to-right.png')} style={styles.arrow}></Image>
            </View>
        </View>
    </View>)    
    }
}
const styles = StyleSheet.create({
    arrow: {
        position: 'absolute',
        right: 10,
        height: 14,
        width: 14,
        },
    
})

export default IncidentSettings



