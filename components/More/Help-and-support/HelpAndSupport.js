import React, {Component} from 'react'
import {View, Text, StyleSheet, Modal} from 'react-native';

class HelpAndSupport extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
    <View style={styles.container}>
        <Modal
            animationType='slide'
            transparent={true}
        >
            <View style={{marginTop: 100, paddingHorizontal: 20}}>
                <Text style={{fontWeight:'600', fontSize: 25, textAlign: 'center'}}> No conversations</Text>
                <Text style={{textAlign: 'center', marginTop: 20, fontSize: 16}}>you have no conversations with the pointbreak developers. </Text>
                <Text style={{color: 'lightgrey', fontSize: 50, letterSpacing: 1, textAlign: 'center'}}>...</Text>
            </View>
        </Modal>
    </View>)
            
    }
}

const styles = StyleSheet.create({
    container: {
        height: '30%',
        position: 'absolute',
        top: 150,
        width: '100%',
        marginLeft: 10,
    },
    image: {
        height: '100%',
        width: '100%',
        marginTop: 10,
    },
    title: {
        fontSize: 20,
    },
    subTitle: {
        color: 'lightgrey',
        fontSize: 12,
        marginTop: 5,
    }
})

export default HelpAndSupport



