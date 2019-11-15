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
    console.log(this.props.location, 'hahawrgh')
    const allLocations = this.props.location.userLocation.reverse().map(everyLocation =>
        <View style={styles.incidentContainer}>
        <TouchableOpacity onPress ={() => this.props.navigation.navigate('insight detail adjustment', {userId: everyLocation.userId, typeOfHazard: everyLocation.incident})}>
        <Text style={{fontSize: 18, fontFamily: 'arial', marginLeft: 10}}>{everyLocation.incident} at {everyLocation.city}</Text>
        <Text style={{fontSize: 11, color: 'grey', marginLeft: 10}}>{everyLocation.time} <Image source={require('../../img/maps-and-flags.png')} style={{backgroundColor: 'white', width: 15, height: 15}}></Image> at {everyLocation.city}</Text>
            <MapView
                region={{
                    latitude: everyLocation.latitude,
                    longitude: everyLocation.longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                    showsUserLocation: true
                }} style={{height: 180, width: '100%', marginBottom: 7}}
                key={everyLocation.userId}>
            <MapView.Marker 
                coordinate={{latitude:everyLocation.latitude, longitude: everyLocation.longitude}}
            />
                </MapView>
            <View style={{alignSelf: 'center', marginRight: 'auto'}}>
                <Text style={{
                    backgroundColor: 'lightgrey',
                    textAlign: 'center',
                    paddingHorizontal: 5,
                    fontSize: 12,
                    fontWeight: '600', 
                    letterSpacing: 0.7,
                    marginLeft: 10}}> {everyLocation.incident} </Text>
            </View>
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
        paddingLeft: 0, 
        paddingRight: 0, 
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
