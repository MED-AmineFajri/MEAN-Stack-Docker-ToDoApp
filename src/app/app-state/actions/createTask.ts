import { createAction, props } from '@ngrx/store';
import { Task } from '../models/task.model';

export const CREATE_TASK = '[CREATE TASK] Create Task API ';
export const CREATE_TASK_SUCCESS = '[CREATE TASK] Create Task API Success';
export const CREATE_TASK_FAILURE = '[CREATE TASK] Create Task API Failure';

export const createTask = createAction(
  CREATE_TASK,
  props<Task>()
);

export const createTaskSuccess = createAction(
  CREATE_TASK,
  props<Task>()
);

export const createTaskFailure = createAction(
  CREATE_TASK,
  props<Task>()
);