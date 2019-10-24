import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { Button } from 'react-native-elements';

class CreateNewTeamDetails extends Component{
    constructor(props){
        super(props)
    }
    render(){
    return(
        <View style={styles.container}>
                <View style={styles.teamAlertsContainer}>
                <Text style={styles.createTeamText}>Here are some incident tags we have selected for you</Text>
                <Text style={styles.createTeamTitle}>You can customise these now or later in settings</Text>
                    <View style={styles.alertContainer}>
                        <Text style={styles.alertText}>Property Damage</Text>
                        <Image source={require('../../img/arrow-point-to-right.png')} style={styles.arrowRight}></Image>
                    </View>
                    <View style={styles.alertContainer}>
                        <Text style={styles.alertText}>Theft</Text>
                        <Image source={require('../../img/arrow-point-to-right.png')} style={styles.arrowRight}></Image>
                    </View>
                    <View style={styles.alertContainer}>
                        <Text style={styles.alertText}>Injury</Text>
                        <Image source={require('../../img/arrow-point-to-right.png')} style={styles.arrowRight}></Image>
                    </View>
                    <View style={styles.alertContainer}>
                        <Text style={styles.alertText}>Maintenance</Text>
                        <Image source={require('../../img/arrow-point-to-right.png')} style={styles.arrowRight}></Image>
                    </View>
                    <View style={styles.alertContainer}>
                        <Text style={styles.alertText}>Near Miss</Text>
                        <Image source={require('../../img/arrow-point-to-right.png')} style={styles.arrowRight}></Image>
                    </View>
                    <View style={styles.alertContainer}>
                        <Text style={styles.alertText}>Hazard</Text>
                        <Image source={require('../../img/arrow-point-to-right.png')} style={styles.arrowRight}></Image>
                    </View>
                </View>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0,
        marginLeft: 25,
        marginRight: 25,
    }, 
    teamAlertsContainer: {
        top: 20,
    },
    createTeamTitle: {
        color: 'grey',
    },
    createTeamText: {
        fontSize: 24,
        fontFamily: 'arial',
        fontWeight: '400',
        letterSpacing: 1,
    },
    alertContainer: {
        height: 60,
        marginTop: 10,
        borderBottomWidth: 0.3,
        borderColor: 'lightgrey',
        justifyContent: 'center',
    },
    alertText: {
        fontFamily: 'arial',
        letterSpacing: 0.7,
        marginBottom: 10,
    },
    arrowRight: {
        width: 16,
        height: 16,
        position: 'absolute',
        right: 0,
    }
})
export default CreateNewTeamDetails;