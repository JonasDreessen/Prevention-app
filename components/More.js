import React, {Component} from 'react';
import {View, Text, StyleSheet, Image,TouchableOpacity} from 'react-native';
import TopNavbar from './TopNavbar';

class More extends Component {
    render(){
        return(
            <View style={styles.container}>
                <TopNavbar />
                <View style={styles.moreContainer}>
                    <TouchableOpacity style={styles.accountContainer}>
                        <Text style={styles.yourName}>JONAS DREESSEN</Text>
                        <Text style={styles.yourTeam}>pointbreak</Text>
                        <Text style={styles.generalInfo}>view and edit account</Text>
                        <View style={styles.yourInitialsContainer}>
                            <Text style={styles.yourInitials}>JD</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.moreOptionsContainer}>
                        <View style={styles.moreOptions}>
                            <Text style={styles.moreOptionsText}>Your team</Text>
                        </View>
                        <View style={styles.moreOptions}>
                            <Text style={styles.moreOptionsText}>Incident settings</Text>
                        </View>
                        <View style={styles.moreOptions}>
                            <Text style={styles.moreOptionsText}>Switch team</Text>
                        </View>
                        <View style={styles.moreOptions}>
                            <Text style={styles.moreOptionsText}>Help & support</Text>
                        </View>
                        <View style={styles.moreOptions}>
                            <Text style={styles.moreOptionsText}>Settings</Text>
                        </View>
                        <View style={styles.moreOptions, styles.logOut}>
                            <Text style={styles.moreOptionsText, styles.logOutText}>Sign out</Text>
                        </View>
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
    moreContainer: {
        top: 50,
        paddingLeft: 10,
        paddingRight: 10,
    },
    accountContainer: {

    },
    yourName: {
        fontSize: 18,
        fontWeight: '400',
        marginBottom: 3,
    },
    yourTeam: {
        fontSize: 16,
        fontWeight: '300',
        color: 'grey',
        marginBottom: 3,
    },
    generalInfo: {
        fontSize: 14,
    },
    yourInitialsContainer: {
        position: 'absolute',
        right: 10,
        width:50,
        height: 50,
        borderRadius: 50,
        backgroundColor: 'brown',
    },
    yourInitials: {
        position: 'absolute',
        right: 12,
        top: 12,
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    moreOptionsContainer: {
        height: '80%',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    moreOptions: {
        height: 40,
        borderBottomWidth: 0.5,
    },
    moreOptionsText: {
        fontSize: 18,
    },
    logOut: {
        borderBottomWidth: 0
    },
    logOutText: {
        color: 'red', 
        fontSize: 18,
    }
})

export default More
