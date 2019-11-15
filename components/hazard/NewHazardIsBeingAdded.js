import React, {Component} from 'react';
import {Modal,View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'
import Geolocation from '@react-native-community/geolocation'
import {getLocation} from '../../redux/actions/getLocation'
import moment from 'moment'


class NewHazardIsBeingAdded extends Component {
    constructor(props){
        super(props);
            this.state = {
                error: null,
                loaded: false
            }
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
                geo_options,
                this.setState({loaded:true})
                );
        };
        
        geo_succes = (position) => {
            const latitude = position.coords.latitude
            const longitude = position.coords.longitude
            let url = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&units=metric&appid=c710bbe46a2469ae01e656bc9461a268'

            fetch(url)
            .then(response => response.json())
            .then(data => {
                    var areaInformation = {
                        area: {
                            country: data.city.country,
                            city: data.city.name
                        },
                        weather: {
                            humidity: data.list[0].main.humidity,
                            temperature: data.list[0].main.temp,
                            description: data.list[0].weather[0].description,
                            icon: data.list[0].weather[0].icon,
                            windSpeed: data.list[0].wind.speed
                        }
                    }
                    this.combineData(position,areaInformation)
                })
        }

        combineData = (position, areaInformation) => {
            var date = moment()
                .utcOffset('+01:00')
                .format('DD-MM-YYYY hh:mm:ss a');
            var incident = this.props.incidentType.typeOfIncident
            var payload = {position: position, area: areaInformation.area, weather:areaInformation.weather, time: date, incident: incident}
            this.props.getLocation(payload)
            this.props.navigation.navigate('newHazardInformationDetails')
        }
        
        geo_error = (err) => {
            this.setState({error: err.message})
        }
        
    render(){
        return(
            <View style={styles.container}>
                <Image source={require('../../img/adding-location.gif')} style={styles.loadingGif}></Image>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Opening new {this.props.incidentType.typeOfIncident}</Text>
                    <Text style={styles.subTitle}>No one is being notified for {this.props.incidentType.typeOfIncident}</Text>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 200,
    },
    loadingGif: {
        alignItems: 'center',
    }, 
    textContainer: {
        marginTop: 200,
    },
    title: {
        fontSize: 26,
        fontWeight: '500',
        fontFamily: 'arial',
    },
    subTitle: {
        fontSize: 16,
        color: 'darkgrey'
    }
})

const mapStateToProps = (state) => {
    return {
        location: state.addNewLocation,
        incidentType: state.AddIncidentIncrease
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        getLocation: (payload) => dispatch(getLocation(payload)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    )(NewHazardIsBeingAdded)
