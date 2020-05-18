import { Reducer } from 'react';
import { Book } from '../types/book';
import { State, SearchBooks } from '../types/state';

export const initialBooks = new Map();

export const searchReducer: Reducer<State, SearchBooks> = (state, { payload: { books }  }) => {
    const entries: [string, Book][] = books.map(book => {
       return [book.id, book];
    });

    return {
        ...state,
        books: new Map(entries),
    };
};
