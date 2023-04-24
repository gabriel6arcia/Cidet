import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalWarningDataComponent } from './modal-warning-data.component';

describe('ModalWarningDataComponent', () => {
  let component: ModalWarningDataComponent;
  let fixture: ComponentFixture<ModalWarningDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalWarningDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalWarningDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
