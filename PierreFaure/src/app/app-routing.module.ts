import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { PagosComponent } from './components/pagos/pagos.component';
import { LoginComponent } from './components/login/login.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { ContactoComponent } from './components/pagina/contacto/contacto.component';
import { ServiciosComponent } from './components/pagina/servicios/servicios.component';
import { PrincipalComponent} from './components/pagina/principal/principal.component';
import { NosotrosComponent} from './components/pagina/nosotros/nosotros.component';



const routes: Routes = [
  {
    path: '' ,
    redirectTo: '/principal',
    pathMatch: 'full'
  },
  {
    path: 'principal',
    component: PrincipalComponent
  },
  {
    path: 'nosotros',
    component: NosotrosComponent
  },
  {
    path: 'servicios',
    component: ServiciosComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
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
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
