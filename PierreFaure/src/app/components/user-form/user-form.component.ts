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
    email: '',
    password: '',
    nombre_s: '',
    ape_pat: '',
    ape_mat: '',
    login_status: false,
  };

  constructor(private usersService: UsersService, private router: Router, private activatedRoute: ActivatedRoute) { }

  edit = false;

  ngOnInit(): void {
    const params =  this.activatedRoute.snapshot.params;
    if (params.id) {
      this.usersService.getUser(params.id) .subscribe(
        res => {
          console.log(res);
          this.user = res;
          this.edit = true;
        },
        err => console.log(err)
      );
    }
  }

  // tslint:disable-next-line: typedef
  saveNewUser(){

    this.usersService.saveUser(this.user)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/usuarios']);
      },
      err => console.log(err)
    );
    }

    // tslint:disable-next-line: typedef
    updateUser(){
     /*this.usersService.updateUser(this.user.id_user, this.user) .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/usuarios']);
        },
        err => console.log(err)
      );*/
    }

  }


