import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';

import { UsersService} from './services/users.service';
import { PagosComponent } from './components/pagos/pagos.component';
import { LoginComponent } from './components/login/login.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { PagosFormComponent } from './components/pagos-form/pagos-form.component'
@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    UserFormComponent,
    UserListComponent,
    PagosComponent,
    LoginComponent,
    AdministradorComponent,
    CalendarioComponent,
    PagosFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
