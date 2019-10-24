import React, {Component} from 'react'
import {View, Text, StyleSheet, Image} from 'react-native';

class YourTeam extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
    <View style={styles.container}>
        <View style={styles.contentContainer}>
            <View style={styles.textContainer}>
                <Image source={require('../../img/agenda.png')} style={styles.images}></Image>
                <Text style={styles.text}>Add from Contacts list</Text>
                <Image source={require('../../img/arrow-point-to-right.png')} style={styles.arrow}></Image>
            </View>
            <View style={styles.textContainer}>
                <Image source={require('../../img/add-phone.png')} style={styles.images}></Image>
                <Text style={styles.text}>Add with phone number</Text>
                <Image source={require('../../img/arrow-point-to-right.png')} style={styles.arrow}></Image>
            </View>
            <View style={styles.subSection}>
                <Text style={styles.subSectionText}>Team members</Text>
            </View>
            <View style={{marginTop: 10}}>
            <Text style={styles.text}>Jonas Dreessen</Text>
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
      marginTop: 20,  
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
    subSectionText: {
        fontSize: 14,
        color: 'grey',
    }
    
})

export default YourTeam



