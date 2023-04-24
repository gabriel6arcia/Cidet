import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-warning-client',
  templateUrl: './modal-warning-client.component.html',
  styleUrls: ['./modal-warning-client.component.css']
})
export class ModalWarningClientComponent {
  @Output() onDelete = new EventEmitter<boolean>(false);

  deleteElement() {
    this.onDelete.emit(true);
  }
}
