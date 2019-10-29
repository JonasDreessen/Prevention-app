import React, {Component} from 'react';
import {Modal,View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation';
import Geolocation from '@react-native-community/geolocation'
import {getLocation} from '../../redux/actions/getLocation'


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
            this.props.getLocation(position),
            this.props.navigation.navigate('newHazardInformationDetails')
            this.setState({loaded: false})
        }
        geo_error = (err) => {
            this.setState({error: err.message})
        }
        
    render(){
        console.log(this.props.location)
        return(
            <View style={styles.container}>
                <Image source={require('../../img/adding-location.gif')} style={styles.loadingGif}></Image>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Opening new incident</Text>
                    <Text style={styles.subTitle}>No one is being notified for injury</Text>
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
        location: state.addNewLocation
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
    )(NewHazardIsBeingAdded)

