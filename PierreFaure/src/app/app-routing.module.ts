import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { PagosComponent } from './components/pagos/pagos.component';
import { LoginComponent } from './components/login/login.component';
import { AdministradorComponent } from './components/administrador/administrador.component';

const routes: Routes = [
  {
    path: '' ,
    redirectTo: '/usuarios',
    pathMatch: 'full'
  },
  {
    path: 'usuarios',
    component: UserListComponent
  },
  {
    path: 'usuarios/add',
    component: UserFormComponent
  },
  {
    path: 'usuarios/edit/:id',
    component: UserFormComponent
  },
  {
    path: 'pagos',
    component:PagosComponent
  },
  {
    path :'login',
    component:LoginComponent
  },
  {
    path : 'admin',
    component:AdministradorComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
