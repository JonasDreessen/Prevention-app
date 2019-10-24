import React, {Component} from 'react'
import {View, Text, StyleSheet, Image} from 'react-native';

class Settings extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
    <View style={styles.container}>
        <Text>settings</Text>
    </View>)
            
    }
}

const styles = StyleSheet.create({
    container: {
        height: '30%',
        position: 'absolute',
        top: 150,
        width: '100%',
        marginLeft: 10,
    },
    image: {
        height: '100%',
        width: '100%',
        marginTop: 10,
        
    },
    title: {
        fontSize: 20,
    },
    subTitle: {
        color: 'lightgrey',
        fontSize: 12,
        marginTop: 5,
    }
})

export default Settings



