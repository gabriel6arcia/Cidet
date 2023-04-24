import { createReducer, on } from '@ngrx/store';
import { MuniState } from 'src/app/models/muni.state';
import {
  loadMuni,
  loadedDepartment,
  loadedMuni,
} from '../actions/muni.actions';

export const initialState: MuniState = {
  loading: false,
  municipalities: [],
  departments: [],
};

export const muniReducer = createReducer(
  initialState,
  on(loadMuni, (state) => {
    return { ...state, loading: true };
  }),
  on(loadedMuni, (state, { municipalities }) => {
    return { ...state, loading: false, municipalities: municipalities };
  }),
  on(loadedDepartment, (state, { department }) => {
    return { ...state, loading: false, departments: department };
  })
);
