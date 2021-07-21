import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';

/**
 * Sendbird
 */
import SendBird from 'sendbird';
var sb = null;
export default class App extends Component {

    componentDidMount() {
        /**
         * Sendbird. Add your application ID
         */
        sb = new SendBird({appId: 'ENTER HERE YOUR APPLICATION ID'});
        /**
         * Connect using any of your users
         */
        sb.connect('ANY USER ID HERE', (user, error) => {
            if (error) {
                console.dir(error);
                error = error
            } else {
                alert('You are connected :-)');
            }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Sendbird test.</Text>
                <Text>You should see an alert if connected.</Text>
                <StatusBar style="auto" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
