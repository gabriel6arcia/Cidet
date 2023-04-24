import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  DepartmentRes,
  MuniCreateDTO,
  MuniRes,
  Municipality,
} from '../models/municipalities';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { loadedMuni } from '../state/actions/muni.actions';

@Injectable({
  providedIn: 'root',
})
export class MunicipalityService {
  private apiUrl = 'https://pruebaapicidet.azurewebsites.net/api/';

  constructor(private http: HttpClient, private store: Store<AppState>) {}

  getMuni() {
    return this.http.get<MuniRes>(`${this.apiUrl}Municipality`);
  }

  getDepartments() {
    return this.http.get<DepartmentRes>(`${this.apiUrl}department`);
  }

  createMuni(dto: MuniCreateDTO) {
    return this.http.post<Municipality>(`${this.apiUrl}Municipality`, dto);
  }

  updateMuni(dto: Municipality) {
    return this.http.put(`${this.apiUrl}Municipality?Id=${dto.id}`, {
      name: dto.name,
      departmentId: dto.departmentId,
      danecode: dto.danecode,
      isCapital: dto.isCapital,
    });
  }

  deleteMuni(id: number) {
    return this.http.delete(`${this.apiUrl}Municipality/${id}`);
  }

  updateMuniList() {
    return this.getMuni().subscribe((res) =>
      this.store.dispatch(loadedMuni({ municipalities: res.data }))
    );
  }
}
