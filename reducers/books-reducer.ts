import {
    SearchActionPayload,
    SearchActionRequest,
    SearchActionResponse,
    Payload,
    Action,
} from '../types/action';
import { RequestHandler, ResponseHandler, Handlers } from '../types/state';
import{ ActionType } from '../constants/action-type';
import { Book } from '../types/book';

export const initialBooks = new Map();

const BOOKS: Book[] = [
    { title: 'Harry Potter', author: 'Jorge', coverURL: '/', id: '1' },
    { title: 'Senhor dos Aneis', author: 'Peter', coverURL: '/', id: '2' },
    { title: 'Como Fazer Amigos', author: 'Carl', coverURL: '/', id: '3' },
];

const searchRequest: RequestHandler<SearchActionRequest, SearchActionPayload> = (state, action) => {
    const booksWith = BOOKS.filter(book => {
       return book.title.includes(action.keyword);
    });

    const entries: [string, Book][] = booksWith.map(book => {
       return [book.id, book];
    });

    return {
        books: new Map(entries),
    };
};

const searchResponse: ResponseHandler<SearchActionResponse, SearchActionPayload> = (state, action, { books }) => {
    return { ...state, books };
};

const reducer: [ActionType, Handlers<Action, Payload>] = [
   ActionType.Search,
   [
       searchRequest as RequestHandler<Action, Payload>,
       searchResponse as ResponseHandler<Action, Payload>
   ],
];

export default reducer;
