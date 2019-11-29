import React, {Component} from "react";
import {StyleSheet,View} from "react-native";
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import AppContainer from './navigation/navigation'
import reducer from './redux/reducer/index'
import createSagaMiddleware from 'redux-saga'
import {watchAPIcall} from './sagas/saga'



const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware)) 
sagaMiddleware.run(watchAPIcall)

class App extends Component {
  render(){
    return (
    <Provider store={store}>
        <View style={styles.container}>
        
          <AppContainer counterState={this.state}/> 
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleText: {
    textAlign: 'center',
    fontSize: 22,
    color: 'red',
    flex: 1,
    justifyContent: 'space-around'
  }
})

export default App

