import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/users';
import { map } from "rxjs/operators";
//import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  headers:HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
    });

    loginuser(email:string, password:string):Observable<any>{
      const url_api = "http://localhost:4200/login?include=user";
      return this.http
      .post<User>(
        url_api,
        { email, password },
        { headers: this.headers }
      )
      .pipe(map(data => data));
    }

    setUser(user:User):void{
      let user_string = JSON.stringify(user);
      localStorage.setItem("currentUser", user_string);
    }

    setToken(token: string):void{
      localStorage.setItem("accessToken", token)
    }

    getToken() {
      return localStorage.getItem("accessToken");
    }

  /*getCurrentUser():User{
    let user_string = localStorage.getItem('currentUser');
    if(!isNullOrUndefined (user_string)){
      let user = JSON.parse(user_string!);
      return user;
    }else{
      return null!;
    }
  }
*/
  logoutUser(){
    let accessToken = localStorage.getItem("accessToken");
    const url_api = `http://localhost:4200/logout?access_token=${accessToken}`;
    localStorage.removeItem("accessToken");
    localStorage.removeItem("currentUser");
    return this.http.post<User>(url_api, { headers: this.headers })
  }
}
