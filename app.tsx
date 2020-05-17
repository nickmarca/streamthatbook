import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { StateProvider } from './hooks/use-state-value';
import HomeScreen from './screens/home-screen';

const Stack = createStackNavigator();

const Main = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
};

const App = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <StateProvider>
                <NavigationContainer>
                    <Main />
                </NavigationContainer>
            </StateProvider>
        </>
    );
};

export default App;
