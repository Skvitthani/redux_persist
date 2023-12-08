import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screen
import GetUserData from '../screens/GetUserData';
import AddUserDataScreen from '../screens/AddUserDataScreen';

// Type
import {DealerNavigNavigationType} from '.';

const Stack = createNativeStackNavigator<DealerNavigNavigationType>();

const StackNavigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="AddUserDataScreen" component={AddUserDataScreen} />
        <Stack.Screen name="GetUserData" component={GetUserData} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigate;
