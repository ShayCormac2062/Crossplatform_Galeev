import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WeatherView from './WeatherView';

const App = () => {
  return (
      <View style={styles.container}>
        <Text style={styles.header}>Погода в Kazan</Text>
        <WeatherView />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;
