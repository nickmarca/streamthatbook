import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import BookList from '../components/book-list';
import Search from '../components/search';

const HomeScreen: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Search />
            <BookList />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
});

export default HomeScreen;
