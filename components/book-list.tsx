import React from 'react';
import { FlatList } from 'react-native';
import BookItemList from './book-list-item';
import useStateValue from '../hooks/use-state-value';

const BookList: React.FC = () => {
    const [{ books }] = useStateValue();
   
    return (
        <FlatList
            data={Array.from(books.values())}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <BookItemList author={item.author} title={item.title} />}
        />
    );
};

export default BookList;
