import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import Topnavbar from '../TopNavbar'
import MapView, {Marker} from 'react-native-maps'
import { connect } from 'react-redux'
import NoIncidentsReported from './noIncidentsReported'

class incidentOverview extends Component {
    constructor(props){
        super(props)
    }
    
    render(){
    const allLocations = this.props.location.userLocation.reverse().map(everyLocation =>
        <View style={{marginTop: 50, paddingLeft: 10, paddingRight: 10, paddingTop: 10, paddingBottom: 10}}>
        <TouchableOpacity onPress={this.props.navigation.push()}>
        <Text style={{fontSize: 20}}>{everyLocation.incident} at {everyLocation.city}</Text>
        <Text>{everyLocation.time}</Text>
            <MapView
                region={{
                    latitude: everyLocation.latitude,
                    longitude: everyLocation.longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                    showsUserLocation: true
                }} style={{height: 200, width: '100%', marginBottom: 20}}
                key={Math.random() * 1000}>
            <MapView.Marker 
                coordinate={{latitude:everyLocation.latitude, longitude: everyLocation.longitude}}
            />
                </MapView>
            <Text style={{backgroundColor: 'lightgrey', maxWidth: 100, textAlign: 'center'}}>{everyLocation.incident}</Text>
            </TouchableOpacity>
            </View>
    )
        return(
    this.props.location.userLocation.length > 0 ? 
            <ScrollView style={{flex: 1, marginTop: 40}}>
                <View>
                    {/* <Topnavbar navigation={this.props.navigation}/> */}
                    <View style={styles.container}>
                        {this.props.location.isLoaded && (
                            <View>
                                {allLocations}
                            </View>
                            )}
                    </View>
                </View>
            </ScrollView>
            : 
            <NoIncidentsReported />
        )
    }
}

const styles = StyleSheet.create({
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




const mapStateToProps = (state) => {
    return {
        location: state.addNewLocation
        // amountOfIncidents: state.AddIncidentIncrease.amountOfIncidents,
        // modalVisible: state.changeVisibleState.modalVisible,
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return { 
//         getLocation: (position) => dispatch(getLocation(position)),
//     }
// }

export default connect(
    mapStateToProps,
    null,
    )(incidentOverview)
