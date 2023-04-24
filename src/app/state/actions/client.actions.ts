import { createAction, props } from '@ngrx/store';
import { Client } from 'src/app/models/client';

export const loadClients = createAction('[Clients List] Load clients');

export const loadedClients = createAction(
  '[Clients List] Loaded success',
  props<{ clients: Client[] }>()
);

export const deleteClient = createAction('[Clients List] Delete');
