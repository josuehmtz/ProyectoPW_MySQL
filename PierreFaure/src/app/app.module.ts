import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';

import { UsersService} from './services/users.service';
import { Tipo_UsuarioService } from './services/tipos_usuarios.service';
import { PagosComponent } from './components/pagos/pagos.component';
import { LoginComponent } from './components/login/login.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { PagosFormComponent } from './components/pagos-form/pagos-form.component';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { NavegacionComponent } from './components/pagina/navegacion/navegacion.component';
import { PrincipalComponent } from './components/pagina/principal/principal.component';
import { ServiciosComponent } from './components/pagina/servicios/servicios.component';
import { ContactoComponent } from './components/pagina/contacto/contacto.component';
import { NosotrosComponent } from './components/pagina/nosotros/nosotros.component';
import { GooglePayButtonModule } from '@google-pay/button-angular';
import { DataApiService } from './services/data-api.service';
import { PadreFamiliaComponent } from './components/padre-familia/padre-familia.component';
import { NavProfileComponent } from './components/nav-profile/nav-profile.component';
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
    PagosFormComponent,
    NavegacionComponent,
    PrincipalComponent,
    ServiciosComponent,
    ContactoComponent,
    NosotrosComponent,
    PadreFamiliaComponent,
    NavProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AmazingTimePickerModule,
    GooglePayButtonModule,
  ],
  providers: [
    UsersService,
    DataApiService,
    Tipo_UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
