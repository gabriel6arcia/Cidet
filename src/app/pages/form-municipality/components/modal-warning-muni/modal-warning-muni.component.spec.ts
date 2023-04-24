import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalWarningMuniComponent } from './modal-warning-muni.component';

describe('ModalWarningMuniComponent', () => {
  let component: ModalWarningMuniComponent;
  let fixture: ComponentFixture<ModalWarningMuniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalWarningMuniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalWarningMuniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
