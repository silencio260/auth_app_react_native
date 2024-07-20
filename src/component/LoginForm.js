import React, { Component } from 'react'
import {View, Text, TextInput} from 'react-native'
import firebase from 'firebase'
import {Button, Card, CardSection, Input, Spinner} from './common'


export default class LoginForm extends Component {

    state = {email: '', password: '', error: '', loading: false}

    onButtonPress(){
        const {email, password} = this.state;

        this.setState({error: '', loading: true})

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this))
            })

    }

    onLoginFail(){
        console.log('log in failed')
        this.setState({error: 'Authentication failed', loading: false})
    }

    onLoginSuccess(){
        console.log('log in success')
        this.setState({
            email: '',
            password: '', 
            error: '',
            loading: false
        })
    }

    renderButton(){
        if(this.state.loading){
            return <Spinner />
        }

        return (
                  
            <Button onPress={this.onButtonPress.bind(this)}>
                Login in
            </Button>
        )
    }

    render() {
        return (
            <Card>
                <CardSection>
                <Input
                    label='Email'
                    value={this.state.email}
                    placeholder='user@gmail.com'
                    onChangeText={(email) => this.setState({email})}
                    />
            
                </CardSection>

                <CardSection>
                <Input
                    secureTextEntry
                    placeholder='password'
                    label='Password'
                    value={this.state.password}
                    onChangeText={(password) => this.setState({password})}
                 />
                </CardSection>

                <Text style={styles.errorTextStyle} >
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
                
            </Card>
        )
    }
}


const styles = {
    errorTextStyle:{
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

