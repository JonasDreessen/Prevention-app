import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native';
import TopNavbar from './TopNavbar';
import MyAppText from './stylingComponets/myAppText'

class TeamAlerts extends Component {
    render(){
        return(
            <View style={styles.container}>
                <TopNavbar />
                <View style={styles.teamAlertsContainer}>
                    <View style={styles.alertContainer}>
                        <Text style={styles.alertText}>Property Damage</Text>
                        <Image source={require('../img/arrow-point-to-right.png')} style={styles.arrowRight}></Image>
                    </View>
                    <View style={styles.alertContainer}>
                        <Text style={styles.alertText}>Theft</Text>
                        <Image source={require('../img/arrow-point-to-right.png')} style={styles.arrowRight}></Image>
                    </View>
                    <View style={styles.alertContainer}>
                        <Text style={styles.alertText}>Injury</Text>
                        <Image source={require('../img/arrow-point-to-right.png')} style={styles.arrowRight}></Image>
                    </View>
                    <View style={styles.alertContainer}>
                        <Text style={styles.alertText}>Maintenance</Text>
                        <Image source={require('../img/arrow-point-to-right.png')} style={styles.arrowRight}></Image>
                    </View>
                    <View style={styles.alertContainer}>
                        <Text style={styles.alertText}>Near Miss</Text>
                        <Image source={require('../img/arrow-point-to-right.png')} style={styles.arrowRight}></Image>
                    </View>
                    <View style={styles.alertContainer}>
                        <Text style={styles.alertText}>Hazard</Text>
                        <Image source={require('../img/arrow-point-to-right.png')} style={styles.arrowRight}></Image>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
    }, 
    teamAlertsContainer: {
        top: 50,
    },
    alertContainer: {
        height: 60,
        marginLeft: 25,
        marginRight: 25,
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

export default TeamAlerts
