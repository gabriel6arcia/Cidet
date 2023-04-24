import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalWarningClientComponent } from './modal-warning-client.component';

describe('ModalWarningClientComponent', () => {
  let component: ModalWarningClientComponent;
  let fixture: ComponentFixture<ModalWarningClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalWarningClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalWarningClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
