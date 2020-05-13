import type { User } from './user';
import { ActionType } from '../constants/action-type';

type SignupAction = {
    type: ActionType.Signup;
    payload: {
        user: User;
    };
}

type SignoutAction = {
    type: ActionType.Signout;
}

export type Action = SignupAction | SignoutAction;
