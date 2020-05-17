import type { Book } from './book';

export type RequestHandler<T, S> = (state: State, action: T) => S;

export type ResponseHandler<T, S> = (state: State, action: T, payload: S) => State;

export type Handlers<T, S> = [RequestHandler<T, S>, ResponseHandler<T, S>];

export type State = {
    books: Map<string, Book>;
};
