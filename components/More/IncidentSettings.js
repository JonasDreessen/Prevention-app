import React, {Component} from 'react'
import {View, Text, StyleSheet, Image} from 'react-native';

class IncidentSettings extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
    <View style={styles.container}>
        <View style={styles.contentContainer}>
            <View style={styles.textContainer}>
                <Image source={require('../../img/price-tag.png')} style={styles.images}></Image>
                <View style={{flexDirection: 'column'}}>
                    <Text style={styles.text}>Tag management</Text>
                    <Text style={styles.subText}>Customise incident type</Text>
                </View>
                <Image source={require('../../img/arrow-point-to-right.png')} style={styles.arrow}></Image>
            </View>
            <View style={styles.textContainer}>
                <Image source={require('../../img/up-arrow.png')} style={styles.images}></Image>
                <View style={{flexDirection: 'column'}}>
                    <Text style={styles.text}>Initial incident input</Text>
                    <Text style={styles.subText}>First input to show after you opened an{"\n"}incident</Text>
                </View>
                <Image source={require('../../img/arrow-point-to-right.png')} style={styles.arrow}></Image>
            </View>
            <View style={styles.textContainer}>
                <Image source={require('../../img/brackets.png')} style={styles.images}></Image>
                <View style={{flexDirection: 'column'}}>
                    <Text style={styles.text}>Additional input</Text>
                    <Text style={styles.subText}>Experimental</Text>
                </View>
                <Image source={require('../../img/arrow-point-to-right.png')} style={styles.arrow}></Image>
            </View>
        </View>
    </View>)    
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft:25,
        marginRight: 25,
    },
    contentContainer: {
      marginTop: 30,  
    },
    text: {
        fontSize: 18,
        fontWeight: '500',
        marginTop: 10,
        
    },
    images: {
        width: 24,
        height: 24,
        marginRight: 20,
    },
    arrow: {
        position: 'absolute',
        right: 10,
        height: 14,
        width: 14,
        },
    textContainer:{
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'center'
    },
    subText:{
        fontSize: 14,
        color: 'grey',
        marginTop: 5,
    }
    
})

export default IncidentSettings



