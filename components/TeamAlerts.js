import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native';
import TopNavbar from './TopNavbar';

class TeamAlerts extends Component {
    render(){
        return(
            <View style={styles.container}>
                <TopNavbar />
                <View style={styles.teamAlertsContainer}>
                    <View style={styles.alertContainer}>
                        <Text>Property Damage</Text>
                    </View>
                    <View style={styles.alertContainer}>
                        <Text>Theft</Text>
                    </View>
                    <View style={styles.alertContainer}>
                        <Text>Injury</Text>
                    </View>
                    <View style={styles.alertContainer}>
                        <Text>Maintenance</Text>
                    </View>
                    <View style={styles.alertContainer}>
                        <Text>Near Miss</Text>
                    </View>
                    <View style={styles.alertContainer}>
                        <Text>Hazard</Text>
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
        height: 50,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        borderBottomWidth: 0.3,
        justifyContent: 'center',
    }
})

export default TeamAlerts
