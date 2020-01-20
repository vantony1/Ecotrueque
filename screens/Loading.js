import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import firebase from 'firebase';

export default class Loading extends React.Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAazOPI7K5ZLgiVGlWbFI3TXgr2r1KpX0A',
      authDomain: 'ecotrueque-f962d.firebaseapp.com',
      databaseURL: 'https://ecotrueque-f962d.firebaseio.com',
      projectId: 'ecotrueque-f962d',
      storageBucket: 'ecotrueque-f962d.appspot.com',
      messagingSenderId: '102658473786',
      appId: '1:102658473786:web:d8ddffb9af8f56fe5e1a03',
      measurementId: 'G-7VZK2ZZ78V',
    });
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'Home' : 'Login');
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="#21701b" size="large" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
