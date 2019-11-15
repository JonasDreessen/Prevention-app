import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';


class loginScreen extends Component {
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <View>
                <Text>Please type in your name and email adres</Text>
            </View>
        )
    }
}

export default loginScreen