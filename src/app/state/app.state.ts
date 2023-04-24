import { ActionReducerMap } from "@ngrx/store";
import { ClientState } from "../models/clients.state";
import { clientReducer } from "./reducers/client.reducers";
import { MuniState } from "../models/muni.state";
import { muniReducer } from "./reducers/muni.reducers";

export interface AppState {
  clients: ClientState;
  municipalities: MuniState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  clients: clientReducer,
  municipalities: muniReducer
}
