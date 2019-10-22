import React, {Component} from 'react';
import {View, Text, StyleSheet, Image,TouchableOpacity} from 'react-native';
import TopNavbar from './TopNavbar';

class More extends Component {
    render(){
        return(
            <View style={styles.container}>
                <TopNavbar/>
                <View style={styles.moreContainer}>
                    <TouchableOpacity style={styles.accountContainer}>
                        <Text style={styles.yourName}>Jonas Dreessen</Text>
                        <Text style={styles.yourTeam}>pointbreak</Text>
                        <Text style={styles.generalInfo}>view and edit account</Text>
                        <View style={styles.yourInitialsContainer}>
                            <Text style={styles.yourInitials}>JD</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.moreOptionsContainer}>
                        <View style={styles.moreOptions, {flexDirection: 'row', borderBottomWidth: 0.5, paddingBottom: 10, borderColor: 'grey'}} >
                            <Image source={require('../img/group.png')} style={styles.moreOptionsLogo}></Image>
                            <View style={{flexDirection: 'column'}}>
                                <Text style={styles.moreOptionsText}>Your team</Text>
                                <Text style={styles.moreOptionsSubText}>Invite your team members</Text>
                            </View>
                            <Image source={require('../img/arrow-point-to-right.png')} style={styles.arrowRight}></Image>
                        </View>

                        <View style={styles.moreOptions, {flexDirection: 'row', borderBottomWidth: 0.5, paddingBottom: 10, borderColor: 'grey'}} >
                            <Image source={require('../img/marketing.png')} style={styles.moreOptionsLogo}></Image>
                            <View style={{flexDirection: 'column'}}>
                                <Text style={styles.moreOptionsText}>Incident settings</Text>
                                <Text style={styles.moreOptionsSubText}>Customise tags and inputs</Text>
                            </View>
                            <Image source={require('../img/arrow-point-to-right.png')} style={styles.arrowRight}></Image>
                        </View>

                        <View style={styles.moreOptions, {flexDirection: 'row', borderBottomWidth: 0.5, paddingBottom: 10, borderColor: 'grey'}} >
                            <Image source={require('../img/sort.png')} style={styles.moreOptionsLogo}></Image>
                            <View style={{flexDirection: 'column'}}>
                                <Text style={styles.moreOptionsText}>Switch Team</Text>                               
                            </View>
                            <Image source={require('../img/arrow-point-to-right.png')} style={styles.arrowRight}></Image>
                        </View>

                        <View style={styles.moreOptions, {flexDirection: 'row', borderBottomWidth: 0.5, paddingBottom: 10, borderColor: 'grey'}} >
                            <Image source={require('../img/lifebuoy.png')} style={styles.moreOptionsLogo}></Image>
                            <View style={{flexDirection: 'column'}}>
                                <Text style={styles.moreOptionsText}>Help & support</Text>
                            </View>
                            <Image source={require('../img/arrow-point-to-right.png')} style={styles.arrowRight}></Image>
                        </View>

                        <View style={styles.moreOptions, {flexDirection: 'row', borderBottomWidth: 0.5, paddingBottom: 10, borderColor: 'grey'}} >
                            <Image source={require('../img/settings.png')} style={styles.moreOptionsLogo}></Image>
                            <View style={{flexDirection: 'column'}}>
                                <Text style={styles.moreOptionsText}>Settings</Text>
                            </View>
                            <Image source={require('../img/arrow-point-to-right.png')} style={styles.arrowRight}></Image>
                        </View>
                        
                        
                        <View style={styles.moreOptions, styles.logOut}>
                            <View style={{flexDirection: 'row'}}>
                                <Image source={require('../img/exit-door.png')} style={styles.moreOptionsLogo, {width: 24, height: 24, marginRight: 20}}></Image>
                                <View style={{flexDirection: 'column'}}>
                                <Text style={styles.moreOptionsText, styles.logOutText}>Sign out</Text>
                                </View>

                            </View>
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
        paddingLeft: 25,
        paddingRight: 25,
    },
    accountContainer: {

    },
    yourName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 3,
        letterSpacing: 0.5
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
        right: 0,
        width:50,
        height: 50,
        borderRadius: 50,
        backgroundColor: 'brown',
    },
    yourInitials: {
        position: 'absolute',
        right: 10,
        top: 10,
        color: 'white',
        fontSize: 24,
        fontWeight: '800',
    },
    moreOptionsContainer: {
        height: '80%',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    moreOptions: {
        height: 40,
        
    },
    moreOptionsText: {
        fontSize: 16,
        
    },
    moreOptionsSubText: {
        fontSize: 12,
        color: 'grey'
    },
    logOut: {
        borderBottomWidth: 0
    },
    logOutText: {
        color: 'red', 
        fontSize: 18,
    },
    moreOptionsLogo: {
        marginRight: 20
    },
    arrowRight: {
        width: 16,
        height: 16,
        position: 'absolute',
        right: 0,
    }
})

export default More
