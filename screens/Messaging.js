import React from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import firebase from 'firebase';
import {Header} from '../common';
import {View} from 'react-native';

export default class Messaging extends React.Component {
  state = {
    messages: [],
  };

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

    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    });
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    );
  }
}
