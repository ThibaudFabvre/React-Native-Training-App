import React from 'react';
import { NavigationContainer } from '@react-navigation/core';
import { createStackNavigator } from '@react-navigation/stack';

import { Homepage, Login } from '../views';

const Stack = createStackNavigator();

const MainMenu = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Homepage" component={Homepage}/>
            <Stack.Screen name="Login" component={Login}/>
        </Stack.Navigator>
    </NavigationContainer>
);

export default MainMenu;