import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  FirstName: string = ""
  Email: string = ""
  Age: number
  Password: string = ""

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  signup = () => {
    this.http.post<any>(environment.apiURL + "/signup",
     {"FirstName": this.FirstName, "Email": this.Email, "Age": this.Age, "Password": this.Password},
      this.httpOptions)
    .subscribe((data) => {
      if(data.status == 'true'){
        localStorage.setItem("name", this.FirstName)
        this.router.navigate(['/user/main'])
      }
    })
  }

}
