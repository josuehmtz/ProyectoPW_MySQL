import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/users';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router:Router) { }
    user:User={
    email:'',
    password:''
  }



  ngOnInit(): void {
  }


  onLogin(){
    return this.authService.loginuser(this.user.email!, this.user.password!)
    .subscribe(data => {
    this.authService.setUser(data.user)
    let token = data.id;
    this.authService.setToken(token);
    this.router.navigate(['/admin'])
    },
    error => console.log(error)
    );
  }

  /*onLogin(form: NgForm) {
    if (form.valid) {
      return this.authService
        .loginuser(this.user.email!, this.user.password!)
        .subscribe(
        data => {
          this.authService.setUser(data.user);
          const token = data.id;
          this.authService.setToken(token);
          this.router.navigate(['/admin']);
          location.reload();
          this.isError = false;
        },
        error => this.onIsError()
        );
    } else {
      this.onIsError();
    }
  }

  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }
  */

}
