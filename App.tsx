// App.js

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import AddTaskForm from './src/Screens/AddTask';
import TaskList from './src/Screens/showtask';
import MainApp from './src/navigation/mainfile';

const Stack = createNativeStackNavigator();



const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
       <MainApp/>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

