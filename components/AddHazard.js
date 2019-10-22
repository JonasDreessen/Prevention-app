import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Button, TouchableOpacity} from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import { withNavigation } from 'react-navigation';

class Addhazard extends Component {
    componentDidMount() {
        const { navigation } = this.props;
        this.focusListener = navigation.addListener('didFocus', () => {
            this._panel.show()
        });
      }
    
        componentWillUnmount() {
            // Remove the event listener
            this.focusListener.remove();
        }
    
    render(){
        return(
            <View style={styles.container}>
                <SlidingUpPanel ref={c => this._panel = c} draggableRange={{top: 800, bottom: 0}} allowDragging={false}>
                    <View style={styles.containerPanel}>
                    <TouchableOpacity style={styles.goBackText}>
                        <Text style={{color: '#46c24e', fontWeight: '300',}} onPress={() => this.props.navigation.navigate('Insights')}>cancel</Text>
                    </TouchableOpacity>
                        <View style={styles.description}>
                            <Text style={styles.panelTitle}>Open new incident</Text>
                            <Text style={styles.descriptionText}>You can customize incident types from Tag</Text>
                            <Text style={styles.descriptionText}>Management</Text>
                        </View>
                        <View style={styles.newIncidentHamburger}>
                            <View style={styles.newIncidentContainer}>
                                <Text style={styles.newIncidentText}>Hazard</Text>
                            </View>
                            <View style={styles.newIncidentContainer} >
                                <Text style={styles.newIncidentText}>Near Miss</Text>
                            </View>
                            <View style={styles.newIncidentContainer}>
                                <Text style={styles.newIncidentText}>Maintenance</Text>
                            </View>
                            <View style={styles.newIncidentContainer}>
                                <Text style={styles.newIncidentText}>Injury</Text>
                            </View>
                            <View style={styles.newIncidentContainer}>
                                <Text style={styles.newIncidentText}>Property Damage</Text>
                            </View>
                            <View style={styles.newIncidentContainer}>
                                <Text style={styles.newIncidentText}>Theft</Text>
                            </View>
                        </View>
                    </View>
                </SlidingUpPanel>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerPanel: {
        flex: 1,
        marginTop: 120,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    goBackText: {
        position: 'absolute',
        top: 10,
        left: 15,

    },
    description: {
        height: 60,
        marginTop: 10,
        textAlign: 'center',
    },
    panelTitle: {
        top: 3,
        marginBottom: 15,
        textAlign: 'center',
        color: '#9e9c98',
        fontWeight: '500',
    },
    descriptionText: {
        textAlign: 'center',
        color: '#9e9c98',
    },
    newIncidentHamburger: {
        top: 30,
        height: '50%',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    newIncidentContainer: {
        borderWidth: 1,
        borderRadius: 7,
        borderColor: '#46c24e',
        width: '100%',
        paddingTop: 15,
        paddingBottom: 15,
    },
    newIncidentText: {
        color: '#46c24e',
        textAlign: 'center',
        fontSize: 16,
    }

})
export default withNavigation(Addhazard);
