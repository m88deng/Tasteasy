import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

const HelloWorldApp = () => {
  return (
    <View style={styles.login}>
      <Image
        source={require('./components/images/tasteasy-logo.png')}
        style={styles.logo}
      />
      <Text>Welcome to Tasteasy!</Text>
      <View>
        <Text>Enter Username</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  logo: {
    width: 225,
    height: 225,
  },
});

export default HelloWorldApp;
