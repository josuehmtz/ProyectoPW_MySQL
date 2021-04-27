import { Component, HostBinding, OnInit } from '@angular/core';
import { User } from '../../models/users';
import {ActivatedRoute, Router } from '@angular/router';

import { UsersService} from '../../services/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  user: User = {
    id_user: 0,
    usuario: '',
    contrasena: '',
    nombre_s: '',
    apellido_pat: '',
    apellido_mat: ''
  };

  constructor(private usersService: UsersService, private router: Router, private activatedRoute : ActivatedRoute) { }

  edit: boolean = false;

  ngOnInit(): void {
    const params =  this.activatedRoute.snapshot.params;
    if (params.id_user) {
      this.usersService.getUser(params.id_user) .subscribe(
        res => {
          console.log(res);
          //this.user = res;
          this.edit = true;
        },
        err => console.log(err)
      )
    }
  }

  saveNewUser(){

    this.usersService.saveUser(this.user)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/usuarios']);
      },
      err => console.log(err)
    )
    }

    updateUser(){
      this.usersService.updateUser(this.user.id_user, this.user) .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/usuarios']);
        },
        err => console.log(err)
      )
    }

  }

