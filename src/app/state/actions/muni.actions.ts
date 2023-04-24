import { createAction, props } from '@ngrx/store';
import { Department, Municipality } from 'src/app/models/municipalities';

export const loadMuni = createAction('[Muni List] Load muni');

export const loadedMuni = createAction(
  '[Muni List] Loaded muni success',
  props<{ municipalities: Municipality[] }>()
);

export const loadDepartment = createAction(
  '[Muni List] Load departments'
);

export const loadedDepartment = createAction(
  '[Muni List] Loaded department success',
  props<{ department: Department[] }>()
);
