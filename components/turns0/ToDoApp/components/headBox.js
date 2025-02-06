import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default class HeadBox extends React.Component {

    render() {
        return (
            <View style={ styles.container }>
                <Text style={ styles.text }>!add item...</Text>
                <TextInput
                    style={ styles.textInput }
                    placeholder="!type some text."
                    onChangeText={ this.props._setItem }
                    value={ this.props._item }
                />
                <Button title="ok" onPress={ ()=>{
                    console.log('!button ok is pressed.');
                    //callback called from onpress event.
                    this.props._addItem();
                }}/>
            </View>
        );
    }
}
//
const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'center',
        backgroundColor: '#00ff00',
    },
    textInput: {
        paddingHorizontal: 15,
    },
    text: {
        paddingHorizontal: 15,
    },
});