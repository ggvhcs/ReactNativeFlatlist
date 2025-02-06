import React from 'react';
import { Text, View } from 'react-native';

export default class UserBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            
        }
    }
    render() { 
        return ( 
            <View>
                <Text>!Hello { this.props.userName }, from UserBox.</Text>
            </View>
        );
    }
}