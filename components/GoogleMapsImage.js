import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import Topnavbar from './TopNavbar'
import MapView, {Marker} from 'react-native-maps'
import { connect } from 'react-redux'

class googleMapsImages extends Component {
    constructor(props){
        super(props)
    }
    render(){
    
    const allLocations = this.props.location.userLocation.map(everyLocation => 
        <MapView
            region={{
                latitude: everyLocation.latitude,
                longitude: everyLocation.longitude,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
                showsUserLocation: true
            }} style={{height: 350, width: '100%', marginBottom: 20}}
            key={everyLocation.key}>
        <MapView.Marker 
            coordinate={{latitude:everyLocation.latitude, longitude: everyLocation.longitude}}
        />
        </MapView> 
        )
        return(
            <View style={{flex: 1, marginTop: 40}}>
                <Topnavbar navigation={this.props.navigation} />
                <ScrollView>
                    <View style={styles.container}>
                        {this.props.location.isLoaded && (
                            <View>
                                {allLocations}
                            </View>
                            )}
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        top: 50,
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
    )(googleMapsImages)
