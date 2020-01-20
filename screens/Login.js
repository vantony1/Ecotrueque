import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Input, Card, CardSection, Button, Header} from '../common';
import firebase from 'firebase';

export default class Login extends React.Component {
  state = {email: '', password: '', errorMessage: null};
  handleLogin() {
    const {email, password} = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Home'))
      .catch(error => this.setState({errorMessage: error.message}));
  }

  onSignUpRequest() {
    this.props.navigation.navigate('SignUp');
  }

  render() {
    return (
      <View>
        <Header headerText="eco-trueque" />
        <View style={styles.headerContainer}>
          <Text style={styles.headerTextStyle}>Welcome</Text>
        </View>
        <Card style={styles.container}>
          <CardSection>
            <Input
              placeholder="email"
              value={this.state.email}
              onChangeText={email => this.setState({email})}
            />
          </CardSection>
          <Input
            placeholder="password"
            value={this.state.password}
            secure
            onChangeText={password => this.setState({password})}
          />
          <CardSection />

          <Text style={styles.errorTextStyle}>{this.state.error}</Text>

          <CardSection>
            <Button onPress={this.handleLogin.bind(this)}>Log In</Button>
          </CardSection>
        </Card>
        <View>
          <Text style={styles.questionText}>Already have an account? </Text>
          <Text onPress={this.onSignUpRequest} style={styles.signUpText}>
            Sign Up!
          </Text>
        </View>
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
  textInput: {
    height: 40,
    fontSize: 20,
    width: '90%',
    borderColor: '#9b9b9b',
    borderBottomWidth: 1,
    marginTop: 8,
    marginVertical: 15,
  },
  headerTextStyle: {
    padding: 25,
    fontSize: 40,
    fontWeight: '100',
    color: '#21701b',
  },
  headerContainer: {
    flex: 1,
    padding: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 1,
    height: 40,
  },
  questionText: {
    padding: 10,
    fontSize: 20,
    alignSelf: 'center',
  },
  signUpText: {
    fontSize: 22,
    alignSelf: 'center',
    fontWeight: '700',
  },
});
