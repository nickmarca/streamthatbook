import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useStateValue } from '../hooks/use-state-value';
import { ActionType } from '../constants/action-type';

const SignupScreen: React.FC = () => {
    const [,dispatch] = useStateValue();
    const onSignup = () => {
        dispatch({
            type: ActionType.Signup,
            payload: {
                user: {
                    name: 'Nicholas',
                    email: 'nicholas@gmail.com',
                }
            },
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text>Signup Screen</Text>
            <TouchableOpacity onPress={onSignup}>
                <Text>Signup</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SignupScreen;
