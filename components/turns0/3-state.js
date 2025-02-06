import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0 //Initial state.
        }
    }
    //
    increment = () => {
        this.setState({ counter: this.state.counter + 1 })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topBox}>
                    <Text>Counter: {this.state.counter} </Text>
                    <Button title="ok" onPress={() => {
                        //console.log('!button ok is pressed.');
                        console.log(this.state.counter);
                        this.increment();
                    }} />
                </View>
                <View style={styles.mainBox} />
                <View style={styles.topBox} />
            </View>
        );
    }

}
//
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    mainBox: {
        flex: 4,
        backgroundColor: '#fff',
    },
    bottomBox: {
        flex: 1,
        backgroundColor: '#00ff00',
    },
    topBox: {
        flex: 1,
        backgroundColor: '#00ff00',
        justifyContent: 'center',
        alignItems: 'center'
    },
});