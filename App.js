import React from 'react';
import { StyleSheet, View} from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';

import Landing from './components/landing';
import Listcard from './components/listcard';

export default class App extends React.Component {
  render() {
    const onBackAndroid = () => {
      let curr = Actions.currentScene;
      Actions.pop();
      return curr != Actions.currentScene; 
  };
    return (
      <View style={styles.container}>
      <Router sceneStyle={styles.scenes} backAndroidHandler={onBackAndroid}>
          <Scene key="root">
              <Scene key="Landing" component={Landing} initial="true" hideNavBar="true" />
              <Scene key="Listcard" component={Listcard} hideNavBar="true"/>
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
