import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { LoginComponent } from './Component/login';

export default function App() {
  return (
    <ImageBackground source={require('./assets/background.jpeg')} style={{ backgroundColor: 'red', flex: 1, width: '100%', height: '100%' }}>
      <View style={styles.container} >
        <LoginComponent></LoginComponent>
      </View>
    </ImageBackground >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%'
  }

});
