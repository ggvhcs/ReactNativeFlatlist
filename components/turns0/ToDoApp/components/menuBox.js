import React from 'react';

export default class MenuBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <View style={styles.container}>
                <Text>!Hello MenuBox...</Text>
            </View>
        );
    }
}