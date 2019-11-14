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
    console.log(this.props.location)
    const allLocations = this.props.location.userLocation.reverse().map(everyLocation =>
        <View style={styles.incidentContainer}>
        <TouchableOpacity onPress ={() => this.props.navigation.navigate('insight detail adjustment', {userId: everyLocation.userId})}>
        <Text style={{fontSize: 18, fontFamily: 'arial'}}>{everyLocation.incident} at {everyLocation.city}</Text>
        <Text>{everyLocation.time}</Text>
            <MapView
                region={{
                    latitude: everyLocation.latitude,
                    longitude: everyLocation.longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                    showsUserLocation: true
                }} style={{height: 200, width: '100%', marginBottom: 20}}
                key={everyLocation.userId}>
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
            <ScrollView style={{flex: 1, backgroundColor: '#f5f5f5'}}>
                <View>
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
    incidentContainer:{
        marginBottom: 8, 
        paddingLeft: 10, 
        paddingRight: 10, 
        paddingTop: 10, 
        paddingBottom: 10, 
        borderBottomWidth: 0.3,
        borderTopWidth: 0.3,
        borderColor: 'grey', 
        backgroundColor: 'white'
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
