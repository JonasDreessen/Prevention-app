import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import MapView, {Marker} from 'react-native-maps'
import { connect } from 'react-redux'
import NoIncidentsReported from './noIncidentsReported'
import {t} from 'react-native-tailwindcss'

class incidentOverview extends Component {
    constructor(props){
        super(props)
    }
    
    render(){
    // -- userLocation is an array with every opened incident in there. We map over it to display all of the incidents. Reverse function is called because we want the latest incident to be visible first -- //
    const allLocations = this.props.location.userLocation.reverse().map(everyLocation =>
        <View style={[t.mT2, t.borderT, t.borderB, t.borderGray400, t.bgWhite, t.pY4]}>
            {/* the navigate gets an object as parameters so that it can be used in the 'inisght detail adjustment' component */}
            <TouchableOpacity onPress ={() => this.props.navigation.navigate('insight detail adjustment', {userId: everyLocation.userId, typeOfHazard: everyLocation.incident})}>
            <Text style={[t.textLg, t.mL4]}>{everyLocation.incident} at {everyLocation.city}</Text>
            <Text style={[t.textXs, t.mL4, t.textGray600, t.mY2]}>{everyLocation.time} <Image source={require('../../img/maps-and-flags.png')} style={[t.bgWhite, t.w3, t.h3]}></Image> at {everyLocation.city}</Text>
                <MapView
                    region={{
                        latitude: everyLocation.latitude,
                        longitude: everyLocation.longitude,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.0090,
                        showsUserLocation: true
                    }} style={[t.h32, t.mX4, t.rounded, t.mB4]}
                    key={everyLocation.userId}>
                <MapView.Marker 
                    coordinate={{latitude:everyLocation.latitude, longitude: everyLocation.longitude}}
                />
                    </MapView>
                <View style={[t.selfCenter, t.mRAuto, t.mL4, t.bgGray300, t.rounded]}>
                    <Text style={[t.fontBold]}> {everyLocation.incident} </Text>
                </View>
                </TouchableOpacity>
            </View>
    )
        return(
    this.props.location.userLocation.length > 0 ? 
        // if above statement is true
            <ScrollView>
                <View style={[t.flex1, t.bgGray100]}>
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
            // if above statement is false
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
    }
}

export default connect(
    mapStateToProps,
    null,
    )(incidentOverview)
