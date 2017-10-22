import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  KeyboardAvoidingView,
  AsyncStorage,
  StatusBar,
  TouchableOpacity
} from 'react-native';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  componentDidMount() {
    this._loadInitialState().done();
  }

  _loadInitialState = async () => {
    var value = await AsyncStorage.getItem('user');
    if (value !== null) {
      this.props.navigation.navigate('Profile');
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../images/sia_logo_blue.png')} />
        </View>
        <View style={styles.formContainer}>
          <StatusBar
            barStyle="light-content"
          />
          <TextInput
            placeholder="Username or email"
            placeholderTextColor="rgba(255,255,255, 0.7)"
            returnKeyType="next"
            onChangeText={(username) => this.setState({username})}
            onSubmitEditing={() => this.passwordInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="rgba(255,255,255, 0.7)"
            returnKeyType="go"
            secureTextEntry
            onChangeText={(password) => this.setState({password})}
            style={styles.input}
            ref={(input) => this.passwordInput = input}
          />
          <TouchableOpacity 
            style={styles.buttonContainer}
            onPress={this.login}
          >
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
    );
  }

  login = () => {
      this.props.navigation.navigate('Home');

      // fetch('http://121.7.65.133:3000/users', {
      //   method: 'POST',
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     username: this.state.username,
      //     password: this.state.password,
      //   })
      // })

      // .then((response) => response.json())
      // .then((res) => {
      //   if (res.success === true) {
      //     AsyncStorage.setItem('user', res.user)
      //     this.props.navigation.navigate('Tasks')
      //   }

      //   else {
      //     alert(res.message);
      //   }
      // })
      // .done();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#04205F',
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  logo: {
  },
  title: {
    color: '#FFF',
    marginTop: 10,
    width: 250,
    textAlign: 'center',
    opacity: 0.9,
  },
  formContainer: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'flex-start',
  },
    input: {
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginBottom: 10,
    color: '#FFF',
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    padding: 15
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  }
});