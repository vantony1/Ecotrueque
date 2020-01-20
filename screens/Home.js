import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import firebase from 'firebase';
import {Header, BottomNavigator} from '../common';

export default class Home extends React.Component {
  state = {currentUser: null};

  componentDidMount() {
    const {currentUser} = firebase.auth();
    this.setState({currentUser});
  }

  render() {
    const {currentUser} = this.state;
    return (
      <View>
        <Header headerText="eco-trueque" />
        <View style={styles.headerContainer}>
          <Text>Hi {currentUser && currentUser.email}!</Text>
        </View>
        <BottomNavigator style={styles.BottomNavigatorStyle} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  headerContainer: {
    flex: 1,
    padding: 270,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BottomNavigatorStyle: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
  },
});
