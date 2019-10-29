import React, {Component} from 'react';
import {Modal,View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'
import Geocoder from 'react-native-geocoding'
import MapView from 'react-native-maps'

class NewHazardInformationDetails extends Component {
    constructor(props){
        super(props);
            this.state= {
                city: '',
                temperature: '',
                description: '',

            }
        }
    componentWillUnmount(){
        this.setState({city: ''})
    }

    render(){
        const arraylength = this.props.location.userLocation.length - 1
        let latitude = this.props.location.userLocation[arraylength].latitude;
        let longitude = this.props.location.userLocation[arraylength].longitude

        // PROBLEM BELOW IS THAT IT FETCHES THE API HUNDREDS OF TIMES (see console.log)
        // let url = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&units=metric&appid=c710bbe46a2469ae01e656bc9461a268';

        // //fetching weather data
        // fetch(url)
        // .then(response => response.json())
        // .then(data => {
        //     console.log(data.list[0], 'weather data')
        // })


        // reverse geocoding to determine city name by using long and lat. 
        Geocoder.init("AIzaSyCaGVvhMaBIZ_zeIzKTVonHAspEfLsbRrk");
        Geocoder.from(latitude, longitude)
            .then(json => {
                this.setState({city: json.results[0].address_components[4].long_name }) ;
        })
        return(
            <View style={styles.container}>
                <Text style={styles.incidentTitle}>{this.props.incidentType.typeOfIncident} at {this.state.city}</Text>
                <Text style={styles.typeOfIncidentTag}>{this.props.incidentType.typeOfIncident}</Text>

                <View style={styles.extraInfoContainer}>
                    <View style={styles.weatherContainer}>
                        <Text>weather</Text>
                    </View>
                    <View style={styles.locationContainer}>
                        <Text> {this.state.city} </Text>
                        
                        <MapView
                            region={{
                                latitude: latitude,
                                longitude: longitude,
                                latitudeDelta: 0.015,
                                longitudeDelta: 0.0121,
                                showsUserLocation: true
                            }} style={{height: 100, width: 150}} />
                        

                    </View>
                </View>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10
    },
    incidentTitle: {
        fontSize: 25,
        fontWeight: '500',
        marginBottom: 10,
    },
    typeOfIncidentTag: {
        fontWeight: '500',
        letterSpacing: 1,
        backgroundColor: 'lightgrey',
        marginBottom: 20,
        paddingTop: 2,
        paddingBottom: 2,
        paddingRight: 2,
        paddingLeft: 2,
        maxWidth: 'auto'
    },
    extraInfoContainer: {
        marginTop: 70,
    },
    weatherContainer: {
        width: '100%',
        borderWidth: 0.5,
        height: 100,
    },
    locationContainer: {
        marginTop: 10,
        borderWidth: 0.5,
        paddingTop: 10,
        paddingBottom: 10
    },

})
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
