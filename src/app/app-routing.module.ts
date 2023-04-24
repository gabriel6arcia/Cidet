import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormClientComponent } from './pages/form-client/form-client.component';
import { FormMunicipalityComponent } from './pages/form-municipality/form-municipality.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'form-client',
    component: FormClientComponent
  },
  {
    path: 'form-municipality',
    component: FormMunicipalityComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
