import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  Department,
  MuniCreateDTO,
  Municipality,
} from 'src/app/models/municipalities';
import { MunicipalityService } from 'src/app/services/municipality.service';
import {
  loadDepartment,
  loadMuni,
  loadedDepartment,
} from 'src/app/state/actions/muni.actions';
import { AppState } from 'src/app/state/app.state';
import {
  selectDepartment,
  selectMuni,
  selectMuniLoading,
} from 'src/app/state/selectors/muni.selectors';

@Component({
  selector: 'app-form-municipality',
  templateUrl: './form-municipality.component.html',
  styleUrls: ['./form-municipality.component.css'],
})
export class FormMunicipalityComponent {
  loading$: Observable<boolean> = new Observable();
  muni$: Observable<Municipality[]> = new Observable();
  departments$: Observable<Department[]> = new Observable();
  munToDelete: number = 0;

  showFormMuni: boolean = false;
  newMuni: Omit<Municipality, 'id'> = {
    name: '',
    departmentId: 0,
    danecode: '',
    isCapital: false,
  };

  indexUpdate: number | null = -1;
  newInfo: Municipality = {
    id: 0,
    name: '',
    departmentId: 0,
    danecode: '',
    isCapital: false,
  };

  constructor(
    private store: Store<AppState>,
    private muniService: MunicipalityService
  ) {}

  ngOnInit() {
    this.loading$ = this.store.select(selectMuniLoading);
    this.muni$ = this.store.select(selectMuni);
    this.departments$ = this.store.select(selectDepartment);

    this.store.dispatch(loadMuni());
    this.store.dispatch(loadDepartment());

    this.muniService.updateMuniList();

    this.muniService
      .getDepartments()
      .subscribe((res) =>
        this.store.dispatch(loadedDepartment({ department: res.data }))
      );
  }

  onCreateMuni() {
    const dto: MuniCreateDTO = {
      name: this.newMuni.name,
      departmentId: this.newMuni.departmentId,
      danecode: this.newMuni.danecode,
      isCapital: this.newMuni.isCapital,
    };
    this.muniService
      .createMuni(dto)
      .subscribe(() => this.muniService.updateMuniList());
    this.toggleForm();
  }

  onUpdateMuni() {
    const dto: Municipality = {
      id: this.newInfo.id,
      name: this.newInfo.name,
      departmentId: this.newInfo.departmentId,
      danecode: this.newInfo.danecode,
      isCapital: this.newInfo.isCapital,
    };
    this.muniService
      .updateMuni(dto)
      .subscribe(() => this.muniService.updateMuniList());
    this.showMuniForm(null);
  }

  onDeleteMuni(event: boolean) {
    if (event === true) {
      this.muniService
        .deleteMuni(this.munToDelete)
        .subscribe(() => this.muniService.updateMuniList());
      this.munToDelete = 0;
    }
  }

  toggleForm() {
    this.newMuni = {
      name: '',
      departmentId: 0,
      danecode: '',
      isCapital: false,
    };
    this.showFormMuni = !this.showFormMuni;
  }

  showMuniForm(index: number | null, dto?: Municipality) {
    this.indexUpdate = index;
    if (dto) {
      this.newInfo = dto;
    }
  }

  searchDepartment(departmentId: number) {
    let name: string | undefined = '';
    this.departments$.forEach(
      (e) => (name = e.find((e) => e.id === departmentId)?.name)
    );
    return name;
  }
}
