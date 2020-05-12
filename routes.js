import { NavigationContainer, StackActions } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from './Pages/home';
import AsteroidDetail from './Pages/AsteroidDetail';
 
const Stack=createStackNavigator();
function MainNavigator()
{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen  name="home" component={Home}></Stack.Screen>
                <Stack.Screen  name="asteroiddetail" component={AsteroidDetail}></Stack.Screen>
            </Stack.Navigator>

        </NavigationContainer>
    )
}
export default MainNavigator;