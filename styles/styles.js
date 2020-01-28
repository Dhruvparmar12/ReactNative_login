import React, { Component } from 'react';

export class styleCss {
    styles = StyleSheet.create({
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
}