import React, {Component} from 'react';
import {Modal,View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'
import Geocoder from 'react-native-geocoding'


class NewHazardInformationDetails extends Component {
    constructor(props){
        super(props)
        }
    render(){
        Geocoder.init()
        const arraylength = this.props.location.userLocation.length - 1
        return(
            <View>
                <Text>{this.props.incidentType.typeOfIncident} at latitude: {this.props.location.userLocation[arraylength].latitude} and longitude: {this.props.location.userLocation[arraylength].longitude}</Text>
            </View>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        location: state.addNewLocation,
        incidentType: state.AddIncidentIncrease
    }
}
const mapDispatchToProps = (dispatch) => {
    return { 
        getLocation: (position) => dispatch(getLocation(position)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    )(NewHazardInformationDetails)
