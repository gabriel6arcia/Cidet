import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { MuniState } from 'src/app/models/muni.state';

export const selectMuniFeature = (state: AppState) => state.municipalities;

export const selectMuni = createSelector(
  selectMuniFeature,
  (state: MuniState) => state.municipalities
);

export const selectDepartment = createSelector(
  selectMuniFeature,
  (state: MuniState) => state.departments
);

export const selectMuniLoading = createSelector(
  selectMuniFeature,
  (state: MuniState) => state.loading
);
