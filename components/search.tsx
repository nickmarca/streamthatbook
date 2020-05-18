import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Book } from '../types/book';
import SearchSVG from '../svgs/search-svg';
import useStateValue from '../hooks/use-state-value';
import { ActionType } from '../constants/action-type';

const searchBook = (keyword: string) => {
    const BOOKS: Book[] = [
        { title: 'Harry Potter', author: 'Jorge', coverURL: '/', id: '1' },
        { title: 'Senhor dos Aneis', author: 'Peter', coverURL: '/', id: '2' },
        { title: 'Como Fazer Amigos', author: 'Carl', coverURL: '/', id: '3' },
    ];
   
    return BOOKS.filter(book => {
       return book.title.includes(keyword);
    });
}

const Search = () => {
    const [keyword, setKeyword] = useState('');
    const [, dispatch] = useStateValue();

    const dispatchSearchRequest = (k: string) => () => {
       dispatch({
           type: ActionType.Search,
           payload: {
               books: searchBook(k.trim())
           },
       });
    };

    useEffect(() => {
        const timeout = setTimeout(dispatchSearchRequest(keyword), 500);

        return () => clearTimeout(timeout);
    }, [keyword]);

    return (
        <View style={styles.container}>
           <TextInput style={styles.textInputStyle} placeholder="Search" onChangeText={setKeyword} value={keyword} />
           <View style={styles.svg}>
               <SearchSVG />
           </View>
        </View>
    );
}

export default Search;

const styles = StyleSheet.create({
    container: {
      padding: 20,
      borderBottomColor: 'rgba(29, 29, 38, 0.1)',
      borderBottomWidth: 1,
      flexDirection: 'row',
    },
    textInputStyle: {
      fontFamily: 'Avenir Book',
      fontSize: 21,
      color: '#1D1D26',
      flex: 1,
      paddingRight: 7,
    },
    svg: {
      height: 24,
      width: 24,
    }
});
