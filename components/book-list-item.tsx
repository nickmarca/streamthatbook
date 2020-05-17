import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const BookListItem: React.FC<{ title: string, author: string }> = ({ title, author }) => {
    return (
        <View style={styles.container}>
            <Text>Book title: {title}</Text>
            <Text>{author}</Text>
        </View>
    );
};

export default BookListItem;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#cccccc',
        height: 180,
        marginVertical: 8,
        marginHorizontal: 16,
    },
});
