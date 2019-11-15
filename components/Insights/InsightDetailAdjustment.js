import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Button} from 'react-native';
import { connect } from 'react-redux';
import MapView from 'react-native-maps'
import RNPickerSelect from 'react-native-picker-select'
import { SevertyIncreaser } from '../../redux/actions/SevertyIncreaser';

class InsightDetailAdjustment extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectedValue: ''
        }
    }
    render(){
        console.log(this.props.navigation.state.params.userId, 'debugging this bitch', this.props.incidentType)
        const extreme = 'extreme'
        const high = 'high'
        const medium = 'medium'
        const low = 'low'
        const trivial = 'trivial'
        const selectedLocation = this.props.location.userLocation.map(clickedLocation => {
            if(clickedLocation.userId === this.props.navigation.state.params.userId){
                console.log('debugging this supreme bitch', clickedLocation.userId )
                return(
                <View style={styles.container}>
                    <Text style={styles.incidentTitle}>{this.props.navigation.state.params.typeOfHazard} at {clickedLocation.city}</Text>
                    <Text style={styles.typeOfIncidentTag}>{this.props.navigation.state.params.typeOfHazard}</Text>
                    <Text>Incident happend on: </Text>
                    <Text>{clickedLocation.time}</Text>
                    
                    <View style={styles.weatherInfoContainer}>
                        <View style={{flexDirection: 'row'}}>
                            <Image source={{uri: `http://openweathermap.org/img/wn/${clickedLocation.weather.weather.icon}@2x.png`}} style={{width: 100, height: 100}}></Image>
                            <View style={{paddingLeft: 10, alignSelf: 'center'}}>
                                <Text style={{fontSize: 17, fontWeight: '500'}}>{clickedLocation.weather.weather.temperature}<Text style={{fontWeight: '300'}}> °C</Text> <Text style={{fontWeight: '400', fontSize: 14}}>  {clickedLocation.weather.weather.description}</Text></Text>
                                <Text style={{marginTop: 5, fontSize: 11, color: 'grey'}}>humidity: {clickedLocation.weather.weather.humidity}%    wind: {clickedLocation.weather.weather.windSpeed}km/h</Text>
                            </View>
                        </View>
                    </View>
                        <View style={styles.extraInfoContainer}>
                            <View style={styles.locationContainer}> 
                                <MapView
                                    region={{
                                        latitude: clickedLocation.latitude,
                                        longitude: clickedLocation.longitude,
                                        latitudeDelta: 0.015,
                                        longitudeDelta: 0.0121,
                                        showsUserLocation: true
                                    }} style={{height: 100, width: 100}}>
                                    <MapView.Marker 
                                        coordinate={
                                            {latitude:clickedLocation.latitude,
                                             longitude: clickedLocation.longitude}
                                             }
                                        />
                                    </MapView>

                                <View style={{marginLeft: 15, alignSelf: 'center'}}>
                                    <Text style={{fontSize: 15, fontWeight: '600'}}>{clickedLocation.city} </Text>
                                    <Text style={{fontSize: 15, fontWeight: '600'}}>{clickedLocation.country}</Text>
                                </View>
                            </View>
                            <RNPickerSelect
                                    style={pickerStyle}
                                    onValueChange={(value) => this.setState({selectedValue: value})}
                                    placeholder={{label: 'please select your severity', value: null}}
                                    items={[
                                        { label: 'Extreme', value: extreme },
                                        { label: 'High', value: high },
                                        { label: 'Medium', value: medium },
                                        { label: 'Low', value: low},
                                        { label: 'Trivial', value: trivial}
                                        ]}
                                    />
                        </View>
                        <TouchableOpacity onPress={() => {this.props.SevertyIncreaser(this.state.selectedValue), this.props.navigation.goBack()}}
                            style={styles.button}>
                            <Text style={styles.buttonText}>Confirm</Text>
                        </TouchableOpacity>
                    </View>

                )
            }
        })
        return(
           <View>
               {selectedLocation}
           </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 10,
        height: '100%',
        backgroundColor: '#f5f5f5'
    },
    weatherInfoContainer: {
        borderWidth: 0.5, 
        borderColor: 'lightgrey',
        marginTop: 20,
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 6,
        backgroundColor: 'white'
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
        borderRadius: 20
    },
    extraInfoContainer: {
        marginVertical: 10,
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
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        borderWidth: 0.5, 
        borderColor: 'lightgrey',
        borderRadius: 6,
        paddingHorizontal: 5,
        paddingVertical: 5,
        backgroundColor: 'white'
    },
    button: {
        backgroundColor: '#6ab865',
        fontSize: 20,
        marginTop: 0,
        marginRight: 'auto',
        marginLeft: 'auto',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
        fontWeight: '700'
    },

})

const pickerStyle = {
	inputIOS: {
		color: 'black',
		paddingTop: 6,
		paddingHorizontal: 10,
        paddingBottom: 6,
        fontSize: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderWidth: 0.8,
        borderRadius: 10,
        borderColor: 'lightgrey',
        marginTop: 10,
        backgroundColor: 'white'
	},
	inputAndroid: {
        color: 'black',
        paddingTop: 13,
		paddingHorizontal: 10,
        paddingBottom: 12,
        fontSize: 24,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10
	},
	placeholderColor: 'black',
	underline: { borderTopWidth: 0 },
	icon: {
		position: 'absolute',
		backgroundColor: 'transparent',
		borderTopWidth: 5,
		borderTopColor: '#00000099',
		borderRightWidth: 5,
		borderRightColor: 'transparent',
		borderLeftWidth: 5,
		borderLeftColor: 'transparent',
		width: 0,
		height: 0,
		top: 20,
		right: 15,
	},
};

const mapStateToProps = (state) => {
    return {
        location: state.addNewLocation,
        incidentType: state.AddIncidentIncrease
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        SevertyIncreaser: (payload) => dispatch(SevertyIncreaser(payload))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    )(InsightDetailAdjustment)



