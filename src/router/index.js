import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../views/Home';
import CardContent from '../views/CardContent';

const Stack = createNativeStackNavigator();

const customOptions = {
  headerShown: false,
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator backBehavior="history" initialRouteName={'Home'}>
        <Stack.Screen name="Home" component={Home} options={customOptions} />
        <Stack.Screen
          name="CardContent"
          component={CardContent}
          options={customOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
