import {Action} from '@ngrx/store';

export const INCREMENT = 'INCREMENT';

export class Increment implements Action {
  readonly type = INCREMENT;
  payload: any;
}

export type CounterActions = Increment;
