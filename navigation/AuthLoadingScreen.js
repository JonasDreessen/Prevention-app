import React, {Component} from 'react';
import { connect } from 'react-redux'
import {createSwitchNavigator} from 'react-navigation'

class AuthLoadingScreen extends Component {
    constructor(props){
        super(props)
    }
    render(){
        console.log('i was here')
        this.props.navigation.navigate(this.props.loginStatus.accountExists ? 'Login' : 'Register')
    return (
           null
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loginStatus: state.addLoginVSregister
    }
  }

  export default connect(
    mapStateToProps,
    null,
    )(AuthLoadingScreen)