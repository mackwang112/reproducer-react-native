/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View, Text } from 'react-native';

let count = 0;

const App = () => {
  console.log('render App...................' + ++count)
  // throw new Error("Test Error: count=" + count);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>React Native Project 77</Text>
    </View>
  )
};

export default App;
