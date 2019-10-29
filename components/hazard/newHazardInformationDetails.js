import React, {Component} from 'react';
import {Modal,View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'


class NewHazardInformationDetails extends Component {
    constructor(props){
        super(props)
        }
        
    render(){
        return(
            <View>
                <Text>Please fill in the details for you new hazard</Text>
            </View>

        )
    }
}

export default NewHazardInformationDetails;

