import React, {Component} from 'react';
import {Modal,View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'
import Geocoder from 'react-native-geocoding'
import MapView from 'react-native-maps'
import { Button } from 'react-native-elements';
import {getLocation} from '../../redux/actions/getLocation'

class NewHazardInformationDetails extends Component {
    constructor(props){
        super(props);
            this.state= {
                area: '',
                city: '',
                temperature: '',
                description: '',
                humidity: '',
                wind: '',
                weatherIcon: '',
                icon: '',
            }
        }
    componentDidMount(){
        const arraylength = this.props.location.userLocation.length - 1
        let latitude = this.props.location.userLocation[arraylength].latitude;
        let longitude = this.props.location.userLocation[arraylength].longitude
        let url = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&units=metric&appid=c710bbe46a2469ae01e656bc9461a268';

        //fetching weather data
        fetch(url)
        .then(response => response.json())
        .then(data => {            
            this.setState({
                temperature: data.list[0].main.temp,
                description: data.list[0].weather[0].description,
                humidity: data.list[0].main.humidity,
                wind: data.list[0].wind.speed,
                icon: data.list[0].weather[0].icon
            })
        })
        // Geocoder.init("AIzaSyCaGVvhMaBIZ_zeIzKTVonHAspEfLsbRrk");
        // Geocoder.from(latitude, longitude)
        //     .then(json => {
        //         this.setState({
        //             city: json.results[0].address_components[4].long_name,
        //             area: json.results[0].address_components[5].long_name     
        //         })

        //     })
    }
    componentWillUnmount(){
        this.setState({
            area: '',
            city: '',
            temperature: '',
            description: '',
            humidity: '',
            wind: '',
            weatherIcon: '',
            icon: '',
        })
    }
    render(){
        const arraylength = this.props.location.userLocation.length - 1
        let latitude = this.props.location.userLocation[arraylength].latitude;
        let longitude = this.props.location.userLocation[arraylength].longitude
        let city = this.props.location.userLocation[arraylength].city
        let country = this.props.location.userLocation[arraylength].country
        return(
            <View style={styles.container}>
                <Text style={styles.incidentTitle}>{this.props.incidentType.typeOfIncident} at {city}</Text>
                <Text style={styles.typeOfIncidentTag}>{this.props.incidentType.typeOfIncident}</Text>

                <View style={styles.extraInfoContainer}>
                    <View style={styles.weatherContainer}>
                        <View style={styles.weatherDetailContainer}>
                            <Image source={{uri: `http://openweathermap.org/img/wn/${this.state.icon}@2x.png`}} style={{width: 100, height: 100}}></Image>
                            <View style={{marginTop: 15}}>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{fontSize: 24}}>{this.state.temperature} °C</Text>
                                    <Text style={{fontSize: 17, marginLeft: 8}}>{this.state.description}</Text>
                                </View>
                                <View style={{flexDirection: 'row', marginTop: 10}}>
                                    <Text style={{marginRight: 10}}>Humidity: {this.state.humidity}% </Text>
                                    <Text>Wind: {this.state.wind} km/h </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.locationContainer}> 
                        <MapView
                            region={{
                                latitude: latitude,
                                longitude: longitude,
                                latitudeDelta: 0.015,
                                longitudeDelta: 0.0121,
                                showsUserLocation: true
                            }} style={{height: 100, width: 150}} />
                            <View style={{marginLeft: 5}}>
                                <Text style={{marginTop: 15, fontSize: 17, fontWeight: '400'}}>{city} </Text>
                                <Text style={{marginTop: 5, fontSize: 17, fontWeight: '400'}}>{country}</Text>
                            </View>
                    </View>
                </View>
                <Button 
                    title={`add new ${this.props.incidentType.typeOfIncident}`} 
                    type='solid' style={{marginTop: 10}} onPress={() => this.props.navigation.navigate('Incidents')}></Button>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 80,
    },
    incidentTitle: {
        fontSize: 25,
        fontWeight: '500',
        marginBottom: 10,
    },
    typeOfIncidentTag: {
        fontWeight: '500',
        fontSize: 14,
        letterSpacing: 1,
        backgroundColor: 'lightgrey',
        marginBottom: 20,
        paddingTop: 2,
        paddingBottom: 2,
        paddingRight: 2,
        paddingLeft: 2,
        maxWidth: 90,
        textAlign: 'center', 
        
    },
    extraInfoContainer: {
        marginTop: 70,
    },
    weatherContainer: {
        width: '100%',
        height: 100,
        borderBottomWidth: 0.3,
        borderColor: 'grey',
    },
    weatherDetailContainer: {
        flexDirection: 'row',
        paddingBottom: 20
    },
    locationContainer: {
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row'
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
