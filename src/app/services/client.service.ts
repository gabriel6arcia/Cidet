import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Client,
  ClientCreateDTO,
  ClientRes,
  ClientUpdateDTO,
  Data,
  DataDTO,
  DataUpdateDTO,
} from '../models/client';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { loadedClients } from '../state/actions/client.actions';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private apiUrl = 'https://pruebaapicidet.azurewebsites.net/api/';

  constructor(private http: HttpClient, private store: Store<AppState>) {}

  getClients(): Observable<ClientRes> {
    return this.http.get<ClientRes>(`${this.apiUrl}client`);
  }

  createClient(dto: ClientCreateDTO) {
    return this.http.post<Client>(`${this.apiUrl}client`, dto);
  }

  createData(dto: DataDTO) {
    return this.http.post<Data>(`${this.apiUrl}data`, dto);
  }

  updateClient(dto: ClientUpdateDTO) {
    return this.http.put<boolean>(`${this.apiUrl}client?id=${dto.id}`, {
      name: dto.name,
    });
  }

  updateData(id: number, dto: DataUpdateDTO) {
    return this.http.put<boolean>(`${this.apiUrl}data?Id=${id}`, dto);
  }

  deleteClient(id: number) {
    return this.http.delete<boolean>(`${this.apiUrl}client/${id}`);
  }

  deleteData(id: number) {
    return this.http.delete<boolean>(`${this.apiUrl}data/${id}`);
  }

  updateClientList() {
    return this.getClients().subscribe((res) => {
      this.store.dispatch(loadedClients({ clients: res.data }));
    });
  }
}
