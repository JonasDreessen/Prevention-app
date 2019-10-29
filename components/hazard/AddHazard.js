import React, {Component} from 'react';
import {Modal,View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements';
import {addHazard, addInjury, addMaintenance, addNearMiss, addPropertyDamage, addTheft} from '../../redux/actions/incidentIncrease'
import {getLocation} from '../../redux/actions/getLocation'
import {changeModalVisibility} from '../../redux/actions/modalVisibleChanger'
import { connect } from 'react-redux'


class Addhazard extends Component {
    dismissFunction(){
        this.props.navigation.goBack();
    }
    constructor(props){
        super(props)
    }    
    render(){
        return(
            <View style={styles.container}>
            <Button title='What problem have you encountered?' 
                    raised={true} 
                    buttonStyle={{
                        backgroundColor: 'green',
                        paddingBottom: 10,
                        paddingLeft: 30,
                        paddingRight: 30,
                        paddingTop: 10,
                        height: 'auto',
                        width: 250,
                        flexWrap: 'wrap',
                        }} 
                    onPress={() => this.props.changeModalVisibility()}>

            </Button>
                <Modal 
                animationType='slide'
                transparent={true}
                visible={this.props.modalVisible}
                >
                
                    <View style={styles.containerPanel}>
                    <TouchableOpacity style={styles.goBackText}>
                        <Text style={{color: '#46c24e', fontWeight: '300',}} onPress={() => this.props.changeModalVisibility()}>cancel</Text>
                    </TouchableOpacity>
                        <View style={styles.description}>
                            <Text style={styles.panelTitle}>Open new incident</Text>
                            <Text style={styles.descriptionText}>You can customize incident types from Tag</Text>
                            <Text style={styles.descriptionText}>Management</Text>
                        </View>
                        <View style={styles.newIncidentHamburger}>
                            <TouchableOpacity style={styles.newIncidentContainer}>
                                <Text style={styles.newIncidentText} onPress={() => {this.props.addHazard(); this.props.navigation.navigate('addingNewHazard'); this.props.changeModalVisibility()}}>Hazard</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.newIncidentContainer} >
                                <Text style={styles.newIncidentText} onPress={() => {this.props.addNearMiss(); this.props.navigation.navigate('addingNewHazard'); this.props.changeModalVisibility()}}>Near Miss</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.newIncidentContainer}>
                                <Text style={styles.newIncidentText} onPress={() => {this.props.addMaintenance(); this.props.navigation.navigate('addingNewHazard'); this.props.changeModalVisibility()}}>Maintenance</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.newIncidentContainer}>
                                <Text style={styles.newIncidentText} onPress={() => {this.props.addInjury(); this.props.navigation.navigate('addingNewHazard'); this.props.changeModalVisibility()}}>Injury</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.newIncidentContainer}>
                                <Text style={styles.newIncidentText} onPress={() => {this.props.addPropertyDamage(); this.props.navigation.navigate('addingNewHazard'); this.props.changeModalVisibility()}}>Property Damage</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.newIncidentContainer}>
                                <Text style={styles.newIncidentText} onPress={() => {this.props.addTheft(); this.props.navigation.navigate('addingNewHazard'); this.props.changeModalVisibility()}}>Theft</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                {/* <Button title='ADD HAZARD' onPress={this.handleModal()}></Button> */}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0,
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
    },
    chooseButton: {
        width: 100,
        borderWidth: 1,
        backgroundColor: 'red'
    }

})

const mapStateToProps = (state) => {
    return {
        amountOfIncidents: state.AddIncidentIncrease.amountOfIncidents,
        modalVisible: state.changeVisibleState.modalVisible,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    addHazard: () => dispatch(addHazard()),
    addNearMiss: () => dispatch(addNearMiss()),
    addMaintenance: () => dispatch(addMaintenance()),
    addInjury: () => dispatch(addInjury()),
    addPropertyDamage: () => dispatch(addPropertyDamage()),
    addTheft: () => dispatch(addTheft()),
    changeModalVisibility: () => dispatch(changeModalVisibility()),
    getLocation: () => dispatch(getLocation())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    )(Addhazard)



