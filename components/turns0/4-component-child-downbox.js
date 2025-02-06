import React from 'react';
import { Text, View } from 'react-native';

export default class DownBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            
        }
    }
    render() { 
        return ( 
            <View>
                <Text>!Count: { this.props.counter }</Text>
            </View>
        );
    }
}