import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/home-screen';
import { StateProvider } from './hooks/use-state-value';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <StateProvider>
          <NavigationContainer>
              <Stack.Navigator>
                  <Stack.Screen name="Home" component={HomeScreen} />
              </Stack.Navigator>
          </NavigationContainer>
      </StateProvider>
    </>
  );
};

export default App;
