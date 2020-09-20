import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Balance from './components/Balance';
import MainBalance from './components/MainBalance';

export default function App() {
  return (
    <View style={styles.container}>
      <MainBalance />
      <Balance />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f4f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
