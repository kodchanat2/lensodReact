import React from 'react';
import { StyleSheet, View} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Landing from './components/landing';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Router sceneStyle={styles.scenes}>
          <Scene key="root">
              <Scene key="landing" component={Landing} initial="true" hideNavBar="true" title="LENSOD" />
          </Scene>
      </Router>
    </View>
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
