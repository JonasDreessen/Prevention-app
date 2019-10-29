import React, {Component} from 'react';
import {Modal,View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation';
import Geolocation from '@react-native-community/geolocation'
import {getLocation} from '../../redux/actions/getLocation'


class NewHazardIsBeingAdded extends Component {
    constructor(props){
        super(props)
        }
        componentDidMount(){
            let geo_options = {
                enableHighAccuracy: true,
                timeOut: 20000,
                maximumAge: 200000,
            }
    
            Geolocation.getCurrentPosition(
                (position) => this.geo_succes(position),
                (error) => this.geo_error(error),
                    geo_options
                );
        };
        geo_succes = (position) => {
            this.props.getLocation(position)
        }
        geo_error = (err) => {
            this.setState({error: err.message})
        }
        
    render(){
        return(
            <View>
                <Text onPress={() => this.props.navigation.navigate('add a new hazard')}> New hazard is being added in Antwerp</Text>
            </View>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        location: state.addNewLocation
        // amountOfIncidents: state.AddIncidentIncrease.amountOfIncidents,
        // modalVisible: state.changeVisibleState.modalVisible,
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
    )(NewHazardIsBeingAdded)

