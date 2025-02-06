import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import DownBox from './components/downBox';
import UserBox from './components/userBox';
import FootBox from './components/footBox';
//
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
  }
  //increment the state value.
  increment = () => {
    this.setState({ counter: this.state.counter + 1 })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBox}>
          { /* <Text>Counter: { this.state.counter } </Text> */}
          <UserBox userName={'jolooo'} />
          {/* Send state as props. */}
          <DownBox counter={this.state.counter} />
        </View>
        <View style={styles.mainBox} />
        <View style={styles.topBox}>
          {/*<Button title="ok" onPress={ ()=>{
            //console.log('!button ok is pressed.');
            console.log( this.state.counter );
            this.increment();
          }}/>*/}
          <FootBox _increment={this.increment} />
        </View>
      </View>
    );
  }

}
//styles.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainBox: {
    flex: 4,
    backgroundColor: '#90ee90',
  },
  bottomBox: {
    flex: 1,
    backgroundColor: '#00ff00',
  },
  topBox: {
    flex: 1,
    backgroundColor: '#006400',
    justifyContent: 'center',
    alignItems: 'center'
  },
});