import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import SearchSVG from '../svgs/search-svg';
import useStateValue from '../hooks/use-state-value';
import { ActionType } from '../constants/action-type';

const Search = () => {
    const [keyword, setKeyword] = useState('');
    const [, dispatch] = useStateValue();

    const dispatchSearchRequest = () => {
       dispatch({
           type: ActionType.Search,
           keyword: keyword.trim(),
       });
    };

    useEffect(() => {
        const timeout = setTimeout(dispatchSearchRequest, 500);

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
