// App.js

import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AddTaskForm from '../Screens/AddTask';
import TaskList from '../Screens/showtask';

const Stack = createNativeStackNavigator();

..

const MainApp = () => {
  return (
    <Stack.Navigator
      initialRouteName="TaskList"
      screenOptions={{
        headerTitleAlign: 'center', 
        headerStyle: {
          backgroundColor: '#007bff', 
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="TaskList"
        component={TaskList}
        options={{title: 'Tasks'}} 
      />
      <Stack.Screen
        name="AddTask"
        component={AddTaskForm}
        options={{title: '  Add Task'}} 
      />
    </Stack.Navigator>
  );
};

export default MainApp;
