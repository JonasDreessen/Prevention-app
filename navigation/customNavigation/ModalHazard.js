import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {t} from 'react-native-tailwindcss'
import Modal from 'react-native-modal'
import { connect } from 'react-redux'
import {addHazard, addInjury, addMaintenance, addNearMiss, addPropertyDamage, addTheft} from '../../redux/actions/incidentIncrease'

class ModalHazard extends Component {
    constructor(props){
        super(props)
        this.state = {
            modalVisible: true
        }
    }
    render () {
        return (
        <View style={[t.flex1]}>
            <Modal
                    animationType='slide'
                    transparent={true}
                    onBackdropPress={() => {this.props.navigation.goBack(null)}}
                    backdropOpacity={0.1}
                    coverScreen={false}
                    style={[t.m0, t.mT32]}
                    isVisible={this.state.modalVisible}>
                        <View style={[t.borderT, t.roundedTLg, t.borderGray300, t.flex1, t.bgWhite,t.roundedT, t.pY2, t.pX4]}>
                            <View style={[t.mB8]}>
                                <Text style={[t.textLg, t.textCenter, t.fontBold, t.textGray600]}>Open new incident</Text>
                                <Text style={[t.textGreen500, t.absolute]} onPress={() => this.props.navigation.goBack(null)}>Cancel</Text>
                                <Text style={[t.textBase, t.fontSemibold, t.textCenter,t.textGray500, t.pX8, t.mT4]}>You can customize incident types from Tag Management</Text>
                            </View>
                                <TouchableOpacity>
                                    <View style={[t.border, t.borderGreen500, t.rounded, t.itemsCenter, t.mT0, t.mB3]}>
                                        <Text style={[t.textLg, t.textGreen500, t.fontSemibold, t.pY3]} onPress={() => {this.props.addHazard(); this.props.navigation.navigate('addingNewHazard')}}>Hazard</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <View style={[t.border, t.borderGreen500, t.rounded, t.itemsCenter, t.mB3]} >
                                        <Text style={[t.textLg, t.textGreen500, t.fontSemibold, t.pY3]}  onPress={() => {this.props.addNearMiss(); this.props.navigation.navigate('addingNewHazard')}}>Near Miss</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <View style={[t.border, t.borderGreen500, t.rounded, t.itemsCenter, t.mB3]}>
                                        <Text style={[t.textLg, t.textGreen500, t.fontSemibold, t.pY3]} onPress={() => {this.props.addMaintenance(); this.props.navigation.navigate('addingNewHazard')}}>Maintenance</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <View style={[t.border, t.borderGreen500, t.rounded, t.itemsCenter, t.mB3]}> 
                                        <Text style={[t.textLg, t.textGreen500, t.fontSemibold, t.pY3]} onPress={() => {this.props.addInjury(); this.props.navigation.navigate('addingNewHazard')}}>Injury</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <View style={[t.border, t.borderGreen500, t.rounded, t.itemsCenter, t.mB3]}>
                                        <Text style={[t.textLg, t.textGreen500, t.fontSemibold, t.pY3]} onPress={() => {this.props.addPropertyDamage(); this.props.navigation.navigate('addingNewHazard')}}>Property Damage</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <View style={[t.border, t.borderGreen500, t.rounded, t.itemsCenter, t.mB3]}>
                                        <Text style={[t.textLg, t.textGreen500, t.fontSemibold, t.pY3]} onPress={() => {this.props.addTheft(); this.props.navigation.navigate('addingNewHazard')}}>Theft</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                    </Modal>
        </View>
        );
    }
}
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
    )(ModalHazard)
