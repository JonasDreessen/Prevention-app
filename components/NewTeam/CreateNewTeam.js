import React, {Component} from 'react';
import {View, Text, StyleSheet, Image,KeyboardAvoidingView, TextInput} from 'react-native';
import { Button } from 'react-native-elements';

class CreateNewTeam extends Component{
    constructor(props){
        super(props)
    }
    render(){
    return(
        <View style={styles.container}>
            <KeyboardAvoidingView>
            <Text style={styles.createTeamTitle}>Create your team</Text>
            <Text style={styles.createTeamText}>Welcome Jonas Dreessen, what would you like to call your team?</Text>
            <View style={styles.textInputContainer}>
                <Image source={require('../../img/group.png')}></Image>
                <TextInput placeholder='Team Name' style={styles.textInput}/>
            </View>
            <Button title='Create new team' type='solid' style={{marginTop: 10}} onPress={() => this.props.navigation.navigate('createTeamDetails')}></Button>
            </KeyboardAvoidingView>
        </View>
    )
    }
}

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

export default CreateNewTeam;
