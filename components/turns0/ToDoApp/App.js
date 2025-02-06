import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeadBox from './components/headBox';
import BodyBox from './components/bodyBox';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      item: ''
    }
  }
  //
  setItem = (value) => {
    console.log(value);
    this.setState({ item:value });
  }
  //add a new item value to items array.
  addItems = (value) => {
    this.setState({
      items:[...this.state.items,value],
      item:'',
    });
    console.log(this.state.items.length);
    console.log('!callback is activated.');
    //this.setState({ item:'' })
  }
  //
  render(){
    return (
      <View style={styles.container}>
        <HeadBox
          _item={ this.state.item }
          _setItem={ this.setItem }
          _addItem={ this.addItems }
        />
        <Text>Current: { this.state.item }</Text>
        <BodyBox />
      </View>
    );
  }  
}
//
const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#fff',
  },
});