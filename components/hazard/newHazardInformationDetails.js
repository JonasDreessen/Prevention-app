import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'
import MapView from 'react-native-maps'
import { Button } from 'react-native-elements';
import {getLocation} from '../../redux/actions/getLocation'
import {t} from 'react-native-tailwindcss'

class NewHazardInformationDetails extends Component {
    constructor(props){
        super(props);
        // -- Initial state -- // 
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
        // -- use the location that lives in the global state of the app to call the open weather api -- // 
        const arraylength = this.props.location.userLocation.length - 1
        let latitude = this.props.location.userLocation[arraylength].latitude;
        let longitude = this.props.location.userLocation[arraylength].longitude
        let url = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&units=metric&appid=c710bbe46a2469ae01e656bc9461a268';

        // -- fetching weather data -- // 
        fetch(url)
        .then(response => response.json())
        .then(data => {            
            // -- data from the api call is put in the local state so it can be called and displayed on the screen -- // 
            this.setState({
                temperature: data.list[0].main.temp,
                description: data.list[0].weather[0].description,
                humidity: data.list[0].main.humidity,
                wind: data.list[0].wind.speed,
                icon: data.list[0].weather[0].icon
            })
        })
    }
    componentWillUnmount(){
        // -- set the state back to the inital state so that it is ready for a next api call on another/same location, 
        // this happens so that the user will not see the previous location that lived inside the state of the app -- // 
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
        // -- arraylength takes the latest added location (the one just created) and will display that information. This guarantees that the correct data is displayed -- // 
        const arraylength = this.props.location.userLocation.length - 1
        let latitude = this.props.location.userLocation[arraylength].latitude;
        let longitude = this.props.location.userLocation[arraylength].longitude
        let city = this.props.location.userLocation[arraylength].city
        let country = this.props.location.userLocation[arraylength].country
        return(
            <View style={[t.pX4, t.bgGray100, t.flex1]}>
            <View style={[t.borderT, t.mY8, t.mX6, t.borderGray400]}>
                <Text style={{top: -10, textAlign: 'center', backgroundColor: '#f7fafc', alignSelf: 'center', paddingHorizontal: 8, color: '#a0aec0', fontWeight: '600'}}>Today</Text>
            </View>
                    <View style={[t.bgWhite, t.border, t.rounded, t.borderGray400]}>
                        <View style={[t.flexRow, t.pB4]}>
                            <Image source={{uri: `http://openweathermap.org/img/wn/${this.state.icon}@2x.png`}} style={[t.w1_4]}></Image>
                            <View style={[t.mT6]}>
                                <View style={[t.flexRow]}>
                                    <Text style={[t.textXl, t.fontMedium]}>{this.state.temperature} <Text style={[t.fontLight]}>°C</Text></Text>
                                    <Text style={[t.textBase, t.mL4, t.fontMedium]}>{this.state.description}</Text>
                                </View>
                                <View style={[t.flexRow, t.mT1]}>
                                    <Text style={[t.mR2, t.textXs, t.fontLight, t.textGray700]}>Humidity: {this.state.humidity}% </Text>
                                    <Text style={[t.textXs, t.fontLight, t.textGray700]}>Wind: {this.state.wind} km/h </Text>
                                </View>
                            </View>
                        </View>
                        <Text style={[t.mL6, t.pB2, t.fontLight, t.textGray800]}>Incident weather conditions</Text>
                    </View>
                    <View style={[t.mT4,t.bgWhite, t.border, t.rounded, t.borderGray400,t.p4, t.alignCenter]}>
                    <View style={[t.flexRow]}> 
                        <MapView
                            region={{
                                latitude: latitude,
                                longitude: longitude,
                                latitudeDelta: 0.015,
                                longitudeDelta: 0.0121,
                                showsUserLocation: true
                            }} style={[t.w1_5]} />
                            <View style={[t.mL4]}>
                                <Text style={[t.textBase, t.fontSemibold, t.trackingWide]}>{city} </Text>
                                <Text style={[t.textBase, t.fontSemibold, t.trackingWide]}>{country}</Text>
                            </View>
                        </View>
                        <Text style={[t.textSm, t.fontMedium, t.trackingWide, t.mT4]}>Jonas Dreessen <Text style={[t.fontLight]}>set incident location</Text></Text>
                    </View>
                <Button 
                    title={`add new ${this.props.incidentType.typeOfIncident}`} 
                    type='solid' style={[t.mT4]} onPress={() => this.props.navigation.navigate('Incidents')}></Button>
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
