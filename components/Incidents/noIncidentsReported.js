import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import Topnavbar from '../TopNavbar'
import MapView, {Marker} from 'react-native-maps'
import { connect } from 'react-redux'

class NoIncidentsReported extends Component {
    render(){
        return(
            <View style={{flex:1, marginTop: 40}}>
                <View style={{alignItems: 'center', marginTop: 'auto', marginBottom: 'auto', paddingLeft: 20, paddingRight: 20}}>
                    <Image source={require('../../img/search.png')} style={{width: 250, height: 250}}></Image>
                    <Text style={{marginTop:20,fontSize: 18, paddingLeft: 20, paddingRight: 20, textAlign: 'center' }}>No incidents to report right now. If you want to add a new incident please tab the plus icon below.</Text>
                </View>           
            </View>
        )
    }
}
export default NoIncidentsReported