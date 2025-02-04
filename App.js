import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Routes from './src/router/index';

function App() {
  return (
    <SafeAreaView style={styles.background}>
      <Routes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    height: '100%',
    backgroundColor: 'white',
  },
});

export default App;
