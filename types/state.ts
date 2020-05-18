import type { Book } from './book';
import { ActionType } from '../constants/action-type';

export type State = {
    books: Map<string, Book>;
}

export type SearchBooks = {
    type: ActionType.Search;
    payload: {
        books: Book[];
    };
}

export type Action =
    | SearchBooks;
