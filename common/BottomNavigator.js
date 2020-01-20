import React from 'react';
import {View, Text} from 'react-native';
import {directive} from '@babel/types';

const BottomNavigator = props => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyle}>Profile</Text>
      <Text style={styles.textStyle}>Feed</Text>
      <Text style={styles.textStyle}>Messages</Text>
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginRight: 5,
    marginTop: 10,
    height: 60,
    flexDirection: 'row',
  },
  textStyle: {
    borderWidth: 1,
    borderColor: 'black',
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 20,
  },
};

export {BottomNavigator};
