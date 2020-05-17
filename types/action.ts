import type { Book } from './book';
import { ActionType } from '../constants/action-type';

export type SearchActionRequest = {
    type: ActionType.Search;
    keyword: string;
}

export type SearchActionPayload = {
    books: Map<string, Book>;
}

export type SearchActionResponse = {
    type: ActionType.Search;
    payload: SearchActionPayload;
}

type OtherPayload = {
    a: string;
}

export type Action = SearchActionRequest | SearchActionResponse;

export type Payload = SearchActionPayload | OtherPayload;
