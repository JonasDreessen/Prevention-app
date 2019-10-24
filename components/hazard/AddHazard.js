import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Button, TouchableOpacity} from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import {addHazard, addInjury, addMaintenance, addNearMiss, addPropertyDamage, addTheft} from '../../redux/actions/incidentIncrease'
import { connect } from 'react-redux'
import {withNavigation} from 'react-navigation'


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
        const {whatever} = this.props
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
                            <TouchableOpacity style={styles.newIncidentContainer}>
                                <Text style={styles.newIncidentText} onPress={() => this.props.addHazard()}>Hazard</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.newIncidentContainer} >
                                <Text style={styles.newIncidentText} onPress={() => this.props.addNearMiss()}>Near Miss</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.newIncidentContainer}>
                                <Text style={styles.newIncidentText} onPress={() => this.props.addMaintenance()}>Maintenance</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.newIncidentContainer}>
                                <Text style={styles.newIncidentText} onPress={() => this.props.addInjury()}>Injury</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.newIncidentContainer}>
                                <Text style={styles.newIncidentText} onPress={() => this.props.addPropertyDamage()}>Property Damage</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.newIncidentContainer}>
                                <Text style={styles.newIncidentText} onPress={() => this.props.addTheft()}>Theft</Text>
                            </TouchableOpacity>
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
        height: 'auto',
    },
    newIncidentText: {
        color: '#46c24e',
        textAlign: 'center',
        fontSize: 16,
    }

})

const mapStateToProps = (state) => {
    return {
        amountOfIncidents: state.AddIncidentIncrease.amountOfIncidents
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log(dispatch)
    return {
    addHazard: () => dispatch(addHazard()),
    addNearMiss: () => dispatch(addNearMiss()),
    addMaintenance: () => dispatch(addMaintenance()),
    addInjury: () => dispatch(addInjury()),
    addPropertyDamage: () => dispatch(addPropertyDamage()),
    addTheft: () => dispatch(addTheft()),

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    )(Addhazard)



