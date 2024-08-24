// App.js
import React from 'react';
import TodoList from './components/TodoList';
import { View } from 'react-native';
import styles from './Styles';

export default function App() {
  return (
    <View>
      <TodoList />
    </View>
  );
}