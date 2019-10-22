import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Button, TouchableOpacity} from 'react-native';

const MyAppText = () => {
    return(
    <Text style={styles.defaultText}>

    </Text>
    )
}

const styles = StyleSheet.create({
    defaultText: {
        fontFamily: 'arial',
        fontSize: 30,
        flex: 1,
    }
})

export default MyAppText