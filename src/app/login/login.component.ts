import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  email = ""
  password = ""


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem("name"))  
    this.router.navigate(['/user/main'])  
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  login = () => {
    this.http.post<any>(environment.apiURL + "/login",
     {"Email": this.email, "Password": this.password},
      this.httpOptions)
    .subscribe((data) => {
      if(data.status == 'true'){
        localStorage.setItem("name", data.name)
        this.router.navigate(['/user/main'])
      }
    })
  }



}
