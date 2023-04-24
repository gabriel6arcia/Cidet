import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-warning-data',
  templateUrl: './modal-warning-data.component.html',
  styleUrls: ['./modal-warning-data.component.css'],
})
export class ModalWarningDataComponent {
  @Output() onDelete = new EventEmitter<boolean>(false);

  deleteElement() {
    this.onDelete.emit(true);
  }
}
