import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

 
@Component({
  selector: 'app-track-health',
  templateUrl: './track-health.component.html',
  styleUrls: ['./track-health.component.css']
})
export class TrackHealthComponent implements OnInit {

  content: any

  time = {hour: 13, minute: 30};
  date
  bg: number

  constructor(private modalService: NgbModal, private http: HttpClient) {}

  ngOnInit() {
  }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  
  open(content1, content2, content3, id) {
    if(id == 1)
    this.content = content1
    else if(id == 2)
    this.content = content2
    else if(id == 3)
    this.content = content3

    this.modalService.open(this.content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        console.log(this.time)
        console.log(this.date)
        console.log(this.bg)
        
        let postBody

        if(id == 1){
           postBody = {
            "user": localStorage.getItem("name"),
            "time": this.time,
            "date": this.date,
            "value": this.bg,
            "type": "blood_glucose"
          }
        }

        else if(id == 2){
          postBody = { }
        }

        this.http.post<any>(environment.apiURL + "/track", postBody ,this.httpOptions)
        .subscribe(data => {
          console.log(data)
        })

    }, (reason) => {
        console.log(reason)
    });
  


  }



  

  tracks = [
    {
      id: 1,
      type: "Blood Glucose",
      img: "../../assets/blood_glucose.png",
      msg: "What's your blood sugar level? Track to chart progress."
    },
    {
      id: 2,
      type: "Blood Pressure",
      img: "../../assets/blood_pressure.jpg",
      msg: "What's your last blood pressure? Track to chart progress"
    },
    {
      id: 3,
      type: "Headache",
      img: "../../assets/headache.jpg",
      msg: "Prone to headaches? Track duration and severity to identify trends."
    }
  ]

}
