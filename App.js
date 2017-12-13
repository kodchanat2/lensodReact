import React from 'react';
import { StyleSheet, View} from 'react-native';

import Landing from './components/landing';

export default class App extends React.Component {
  render() {
    return (
      <Landing/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scenes:{
    backgroundColor: 'white'
  }
});
