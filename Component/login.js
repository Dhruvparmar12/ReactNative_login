import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, KeyboardAvoidingView, TouchableOpacity, Alert } from 'react-native';


export class LoginComponent extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            validity: true
        }
    }
    login = async () => {

        fetch('http://35.160.197.175:3006/api/v1/user/login', {
            method: 'POST',
            headers: {
                // Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.username,
                password: this.state.password,
            }),
        }).then(response => {
            // console.log(response);
            if (response.status === 200) {
                return response.json();
            } else {
                Alert.alert("Fail", 'Please eneter valid credentails');
            }
        }).then(response => {
            console.log(response);
            if (response) {
                Alert.alert("Success", "Welcome to Cricket Champions");
            }
        }).catch(err => {
            if (err) {
                console.log('Login:', err);
            }
        });
    }
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>

                <View style={styles.logoContainer}>
                    <Text style={styles.headerTitle}>Cricket Champions</Text>
                    <Image
                        style={{ width: 100, height: 100, borderRadius: 100 / 2 }}
                        source={require('../assets/cricket.jpg')}
                    />
                </View>

                <Text style={styles.userNameText}>Username:</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter Your Username"
                    placeholderTextColor='rgb(111,39,52)'
                    onChangeText={(value) => this.setState({ username: value, validity: false })}
                    value={this.state.username}
                />

                <Text style={styles.userNameText}>Password:</Text>
                <TextInput
                    secureTextEntry={true}
                    style={styles.textInput}
                    placeholder="Enter Your Password"
                    placeholderTextColor='rgb(111,39,52)'
                    onChangeText={(value) => this.setState({ password: value, validity: false })}
                    value={this.state.password}
                />
                <View style={styles.buttonContainer}>

                    <TouchableOpacity style={this.state.validity ?
                        styles.inactiveStyle : styles.activeStyle}
                        disabled={!Boolean(this.state.username && this.state.password)}
                        onPress={this.login}>
                        <Text style={styles.touchableOpacityText}>Sign In</Text>
                    </TouchableOpacity>
                </View >
            </KeyboardAvoidingView >
        );
    }
}
const styles = StyleSheet.create({
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },

    container: {
        flex: 1,
        justifyContent: 'center',
    },
    headerTitle: {
        fontSize: 30,
        marginBottom: 5,
        color: 'rgb(226,31,72)',
        fontWeight: "bold",
    },
    userNameText: {
        fontSize: 20,
        color: 'rgb(90,87,79)',
        marginBottom: 10,
    },
    textInput: {
        height: 40,
        width: 250,
        borderColor: 'rgb(11,141,236)',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
        color: 'rgb(240,6,49)'
    },
    buttonContainer: {
        marginTop: 10,

    },
    activeStyle: {
        width: 250,
        height: 30,
        borderRadius: 50 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#05acfa',

    },
    inactiveStyle: {
        width: 250,
        height: 30,
        borderRadius: 50 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(173,171,171)',

    },
    touchableOpacityText: {
        color: 'white',
        fontWeight: "bold",
    }
});
