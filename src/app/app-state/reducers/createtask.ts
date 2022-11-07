import * as createTaskActions from '../actions/createTask';
import { Action, createReducer, on } from '@ngrx/store';

export interface State {
    isLoading: boolean;
    isLoadingSuccess: boolean;
    tasks: any;
}

const initialState: State = {
    isLoading: false,
    isLoadingSuccess: false,
    tasks: []
};

export const createTaskReducer = createReducer(
  initialState,
  on(createTaskActions.createTask, (state: any) => ({...state, isLoading: true, isLoadingSuccess: false, login: undefined})),
  on(createTaskActions.createTaskSuccess, (state: any, task: any) => ({...state, isLoading: false, isLoadingSuccess: true, task})),
  on(createTaskActions.createTaskFailure, (state: any, task: any) => ({...state, isLoading: false, isLoadingSuccess: true, task}))
);

export function reducer(state: State | undefined, action: Action) {
  return createTaskReducer(state, action);
}

export const getUsers = (state: State) => {
    return {
      isLoading: state.isLoading,
      isLoadingSuccess: state.isLoadingSuccess,
      login: state.tasks };
};