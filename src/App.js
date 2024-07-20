/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react'
import {View,Text} from 'react-native';
import {Header, Button, Spinner} from './component/common'
import LoginForm from './component/LoginForm'
import firebase from 'firebase'


class App extends Component {

  state ={loggedIn: null}

  UNSAFE_componentWillMount(){

    var firebaseConfig = {
      apiKey: "AIzaSyApQsLxOMh67G2k4sBzkNYLJx7kounmIY0",
      authDomain: "auth-1d99d.firebaseapp.com",
      databaseURL: "https://auth-1d99d.firebaseio.com",
      projectId: "auth-1d99d",
      storageBucket: "auth-1d99d.appspot.com",
      messagingSenderId: "602036729833",
      appId: "1:602036729833:web:3a7553053338556199fd78",
      measurementId: "G-N11F2QQJ2N"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // firebase.analytics();


    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({loggedIn: true})
      } else {
        this.setState({loggedIn: false})

      }
    })

  }

  
  renderContent(){

    switch(this.state.loggedIn){
      case true:
      return (
        <Button onPress={() => firebase.auth().signOut()}>
          Log Out
        </Button>
      )
      case false:
        return <LoginForm />
      default:
        return <Spinner />
    }
    
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication'/>
        {this.renderContent()}
      </View>
    )
  }
}


export default App;
