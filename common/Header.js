import React from 'react';
import {Text, View} from 'react-native';

const Header = props => {
  const {textSyle, viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text style={textSyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  textSyle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#21701b',
  },
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    paddingTop: 25,
    paddingBottom: 25,
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 3,
    position: 'relative',
  },
};

export {Header};
