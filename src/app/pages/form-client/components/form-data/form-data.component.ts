import { Component, Input } from '@angular/core';
import { Data, DataDTO, DataUpdateDTO } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css'],
})
export class FormDataComponent {
  @Input() data: Data[] = [];
  @Input() clientId: number = 0;
  itemToDelete: number = 0;

  showFormData: boolean = false;
  variable: string = '';
  value: string = '';
  indexUpdate: number | null = null;
  newInfo: DataUpdateDTO = {
    variable: '',
    value: '',
  };

  constructor(private clientService: ClientService) {}

  toggleData() {
    this.showFormData = !this.showFormData;
  }

  onCreate() {
    const dto: DataDTO = {
      clientId: this.clientId,
      variable: this.variable,
      value: this.value,
    };
    this.clientService
      .createData(dto)
      .subscribe(() => this.clientService.updateClientList());
  }

  onUpdate(id: number) {
    let dto: DataUpdateDTO = this.newInfo;
    this.clientService
      .updateData(id, dto)
      .subscribe(() => this.clientService.updateClientList());
  }

  onDelete(event: boolean) {
    if (event === true) {
      this.clientService
        .deleteData(this.itemToDelete)
        .subscribe(() => this.clientService.updateClientList());
    }
    this.itemToDelete = 0;
  }

  toggleUpdateData(index: number | null, dto?: DataUpdateDTO) {
    this.indexUpdate = index;
    if (dto) {
      this.newInfo = dto;
    }
  }
}
