import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  signup = () => {
    this.http.post<any>("http://localhost:5000/test", {"az": "abc"}, this.httpOptions)
    .subscribe((data) => {
      console.log(data)
    })
  }

  title = 'minor-web';
}
