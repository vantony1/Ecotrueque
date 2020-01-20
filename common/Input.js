import React from 'react';
import {TextInput, View, Image} from 'react-native';

const Input = ({iconURL, value, onChangeText, placeholder, secure}) => {
  const {inputSyle, imageStyle, containerSyle} = styles;
  return (
    <View style={containerSyle}>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={secure}
        autoCorrect={false}
        style={inputSyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  inputSyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 15,
    height: 40,
    flex: 2,
  },
  imageStyle: {
    width: 10,
    height: 10,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    marginRight: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
  },
  containerSyle: {
    height: 60,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
};

export {Input};
