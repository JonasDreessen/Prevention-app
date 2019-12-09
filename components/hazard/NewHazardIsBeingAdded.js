import React, {Component} from 'react';
import {Modal,View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'
import Geolocation from '@react-native-community/geolocation'
import {getLocation} from '../../redux/actions/getLocation'
import moment from 'moment'
import LottieView from 'lottie-react-native'
import {t} from 'react-native-tailwindcss'


class NewHazardIsBeingAdded extends Component {
    constructor(props){
        super(props);
        // -- setting the initial state -- //
            this.state = {
                error: null,
                loaded: false
            }
        }
        componentDidMount(){
            // -- when the component is loaded, the location of the user will be fetched and used for geotargeting purposes -- //
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
        // -- succes can only be achieved if the user chooses to share it's location with the app. -- //
        geo_succes = (position) => {
            const latitude = position.coords.latitude
            const longitude = position.coords.longitude
            // -- openweather api is used because geolocation for google costs money. This is a free workaround. -- //
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
            // -- when succes, an object of payload will be created that calls the action with all this data inside. This makes the position and weather details live in the global state after the reduces is called -- // 
            var payload = {
                position: position, 
                area: areaInformation.area, 
                weather:areaInformation.weather, 
                time: date, 
                incident: incident
            }
            // -- calling the action -- //
            this.props.getLocation(payload)
            setTimeout(()=>this.props.navigation.navigate('newHazardInformationDetails'), 1800) 
        }
        // -- catching the error and storing it in the local state. Can be displayed to user if wanted (not coded yet) -- //
        geo_error = (err) => {
            this.setState({error: err.message})
        }
        
    render(){
        return(
            <View style={[t.flex1, t.alignCenter, t.justifyCenter]}>
                <LottieView style={[t.w56, t.mLAuto, t.mRAuto]} source={require('../../assets/lottie/695-bouncy-mapmaker.json')} autoPlay duration={1250} />
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
        getLocation: (payload) => dispatch(getLocation(payload)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    )(NewHazardIsBeingAdded)
