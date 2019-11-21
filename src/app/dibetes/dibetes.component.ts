import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dibetes',
  templateUrl: './dibetes.component.html',
  styleUrls: ['./dibetes.component.css']
})
export class DibetesComponent implements OnInit {

  pregnancies: string = ""
  glucose: string = ""
  bp: string = ""
  skinThickness: string = ""
  Insulin: string = ""
  BMI: string = ""
  DPF: string = ""
  age: string = ""

  dibetes = ""

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  predict = () => {
    this.http.post<any>(environment.apiURL + "/predict",
      {
        "pregnancies": this.pregnancies,
        "glucose": this.glucose,
        "bp": this.bp,
        "skinThickness": this.skinThickness,
        "Insulin": this.Insulin,
        "BMI": this.BMI,
        "DPF": this.DPF,
        "age": this.age
      },
      this.httpOptions)
      .subscribe((data) => {
        console.log(data)
        if (data.dibetes == "0") {
          this.dibetes = "You don't have Dibetes"
        }
        else {
          this.dibetes = "You have Dibetes"
        }
      })
  }


}
