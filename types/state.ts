import type { Option } from 'ts-option';
import type { User } from './user';

export type State = {
    user: Option<User>;
};
