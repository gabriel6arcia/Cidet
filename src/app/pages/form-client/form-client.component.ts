import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  Client,
  ClientCreateDTO,
  ClientUpdateDTO,
} from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';
import { loadClients } from 'src/app/state/actions/client.actions';
import { AppState } from 'src/app/state/app.state';
import {
  selectClients,
  selectClientsLoading,
} from 'src/app/state/selectors/client.selectors';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css'],
})
export class FormClientComponent {
  loading$: Observable<boolean> = new Observable();
  clients$: Observable<Client[]> = new Observable();
  clientToDelete: number = 0;

  showAdd: boolean = false;
  indexUpdate: number | null = null;
  indexData: number | null = null;
  img: string = 'http://localhost:4200/assets/icons/arrow-down.svg';
  nameAdd: string = '';
  newName: string = '';

  constructor(
    private store: Store<AppState>,
    private clientService: ClientService
  ) {}

  ngOnInit() {
    this.loading$ = this.store.select(selectClientsLoading);
    this.clients$ = this.store.select(selectClients);

    this.clientService.updateClientList();

    this.store.dispatch(loadClients());
  }

  onCreateClient() {
    const dto: ClientCreateDTO = { name: this.nameAdd };
    this.clientService
      .createClient(dto)
      .subscribe(() => this.clientService.updateClientList());
    this.toggleClient();
  }

  onUpdateClient(id: number, name: string) {
    const dto: ClientUpdateDTO = { id: id, name: name };
    this.clientService.updateClient(dto).subscribe(() => {
      this.clientService.updateClientList();
    });
    this.toggleUpdate(null, '');
  }

  onDeleteClient(event: boolean) {
    if (event === true) {
      this.clientService
        .deleteClient(this.clientToDelete)
        .subscribe(() => this.clientService.updateClientList());
      this.clientToDelete = 0;
    }
  }

  toggleClient() {
    this.nameAdd = '';
    this.showAdd = !this.showAdd;
  }

  toggleUpdate(index: number | null, name: string) {
    this.indexUpdate = index;
    this.newName = name;
  }

  toggleData(index: number) {
    if (this.indexData === index) {
      this.indexData = null;
    } else {
      this.indexData = index;
    }
  }

  toggleImg(event: Event) {
    const element = event.target as HTMLImageElement;
    const arrowDown = 'http://localhost:4200/assets/icons/arrow-down.svg';
    const arrowUp = 'http://localhost:4200/assets/icons/arrow-up.svg';

    if (element.src === arrowDown) {
      this.img = arrowUp;
    } else {
      this.img = arrowDown;
    }
  }
}
