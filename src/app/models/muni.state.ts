import { Department, Municipality } from './municipalities';

export interface MuniState {
  loading: boolean;
  municipalities: Municipality[];
  departments: Department[];
}
