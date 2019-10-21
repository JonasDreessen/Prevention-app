import React, {Component} from 'react';
import {View, Text, StyleSheet, Image,TouchableOpacity,Button} from 'react-native';
import TopNavbar from './TopNavbar';

class Insigts extends Component {
    render(){
        return(
            <View style={styles.container}>
                <TopNavbar />
                <View style={styles.InsightsContainer}>
                    <View style={styles.AmountOfIncidents}>
                        <Text>Incidents (3)</Text>
                    </View>

                    <View style={styles.IncidentsGeneralContainer}>
                        <View style={styles.OpenIncidents, styles.IncidentsDetailContainer}>
                            <Text>3</Text>
                            <Text>Open Incidents</Text>
                        </View>

                        <View style={styles.OpenIncidents, styles.IncidentsDetailContainer}>
                            <Text>0</Text>
                            <Text>Resolved Incidents</Text>
                        </View>
                    </View>

                    <View style={styles.mostUsedTags}>
                        <Text>Most Used Tags</Text>
                    </View>

                    <View style={styles.mostUsedTagsContainer}>
                        <Text style={styles.mostUsedTagsText}>Hazard</Text>
                        <Text style={styles.mostUsedTagsText}>Maintenance</Text>
                    </View>

                    <View style={styles.severety}>
                        <Text>Severety</Text>
                    </View>

                    <View style={styles.severetyContainer}>
                        <View style={styles.severetyTextContainer}>
                            <Text style={styles.severetyText}>low</Text>
                            <Text style={styles.severetyText}>trivial</Text>
                            <Text style={styles.severetyText}>Extreme</Text>
                            <Text style={styles.severetyText}>High</Text>
                            <Text style={styles.severetyText}>Medium</Text>
                        </View>
                        <View style={styles.severetyGraphContainer}>
                            <Image source={require('../img/pie-chart.png')}></Image>
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
    IncidentsGeneralContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    InsightsContainer: {
        top: 50,
        marginLeft: 10,
        marginRight: 10,
    },
    IncidentsDetailContainer: {
        width: '45%',
        backgroundColor: '#e8e6e1',
        paddingTop: 10,
        paddingBottom: 10, 
        paddingLeft: 5,
        paddingRight: 5,
    },
    mostUsedTagsContainer: {
        backgroundColor: '#e8e6e1',
        height: 50,
        justifyContent: 'center',
    },
    mostUsedTags: {
        marginTop: 30,
        marginBottom: 10,
    },
    mostUsedTagsText: {
        fontSize: 12,
        textAlign: 'center',
    },
    severety: {
        marginTop: 30,
        marginBottom: 10,
    },
    severetyContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#e8e6e1',
        paddingTop: 15,
        paddingBottom: 15,
    },
    severetyTextContainer: {
        left: 50,
    },
    severetyText: {
        marginBottom: 10,
        textAlign: 'right',
    }
});
export default Insigts
