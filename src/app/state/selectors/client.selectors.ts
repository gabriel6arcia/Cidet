import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { ClientState } from 'src/app/models/clients.state';

export const selectClientsFeature = (state: AppState) => state.clients;

export const selectClients = createSelector(
  selectClientsFeature,
  (state: ClientState) => state.clients
);

export const selectClientsLoading = createSelector(
  selectClientsFeature,
  (state: ClientState) => state.loading
);
