import React, {Component} from 'react';
import {Modal,View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'



class NewHazardIsBeingAdded extends Component {
    constructor(props){
        super(props)
        }
        
    render(){
        return(
            <View>
                <Text>New hazard is being added in Antwerp</Text>
            </View>

        )
    }
}

export default NewHazardIsBeingAdded;

