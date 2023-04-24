import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-warning-muni',
  templateUrl: './modal-warning-muni.component.html',
  styleUrls: ['./modal-warning-muni.component.css'],
})
export class ModalWarningMuniComponent {
  @Output() onDelete = new EventEmitter<boolean>(false);

  deleteElement() {
    this.onDelete.emit(true);
  }
}
