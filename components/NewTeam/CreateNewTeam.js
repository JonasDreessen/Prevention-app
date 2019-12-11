import React, {Component} from 'react';
import {View, Text, StyleSheet, Image,KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements';
import {connect} from 'react-redux'
import {teamIncreaser} from '../../redux/actions/teamIncreaser'


class CreateNewTeam extends Component{
    constructor(props){
        super(props)
        this.state ={
            team: ''
        }
    }
   
    render(){
        // -- fetching a post request to the DB to create a new team -- // 
        function createNewTeam(newTeamName){
            fetch(`http://spotlight-api.local/addteam/${newTeamName}`);
        }
        
    return(
        <View style={styles.container}>
            <KeyboardAvoidingView>
            <Text style={styles.createTeamTitle}>Create your team</Text>
            <Text>{this.state.team}</Text>
            <Text style={styles.createTeamText}>Welcome Jonas Dreessen, what would you like to call your new team?</Text>
            <View style={styles.textInputContainer}>
                <Image source={require('../../img/group.png')}></Image>
                <TextInput placeholder='Team Name' style={styles.textInput} onChangeText={(text) => this.setState({team: text})}/>
            </View>
                <Button title='Create new team' type='solid' style={{marginTop: 10}} onPress={() => createNewTeam(this.state.team)}></Button>
            </KeyboardAvoidingView>
        </View>
    )
    }
}
// onPress={() => this.props.navigation.navigate('createTeamDetails')}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        marginLeft: 25,
        marginRight: 25,
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
    textInputContainer: {
        flexDirection:'row',
        alignItems: 'center',
        marginTop: 100,
        borderBottomWidth: 0.5,
        borderBottomColor: 'green'
    },
    textInput: {
        height: 40,
        width: '100%',
        marginLeft: 15,
        
    }
})

const mapDispatchToProps = (dispatch) => {
    return { 
        teamIncreaser: (payload) => dispatch(teamIncreaser(payload)),
    }
}

export default connect(
    null,
    mapDispatchToProps,
    )(CreateNewTeam)
