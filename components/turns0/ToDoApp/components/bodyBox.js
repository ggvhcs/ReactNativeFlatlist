import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BodyBox extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>!Hello from body...</Text>
            </View>
        );
    }
}
//
const styles = StyleSheet.create({
    container: {
        flex: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#98fb98',
    },
});