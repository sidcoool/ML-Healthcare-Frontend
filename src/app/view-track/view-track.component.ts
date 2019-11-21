import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Chart } from 'chart.js';



@Component({
  selector: 'app-view-track',
  templateUrl: './view-track.component.html',
  styleUrls: ['./view-track.component.css']
})
export class ViewTrackComponent implements OnInit {
  @ViewChild('lineChart', {static: false}) chartRef: ElementRef;

  content: any

  time = {hour: 13, minute: 30};
  model

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
  }

  open(content1, content2, content3, id) {
    if(id == 1)
    this.content = content1
    else if(id == 2)
    this.content = content2
    else if(id == 3)
    this.content = content3

    this.modalService.open(this.content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        console.log(result)
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

  
    chart = new Chart(this.chartRef.nativeElement, {
    type: 'bar',
    data: {
      labels: ['c','v'], // your labels array
      datasets: [
        {
          data: [1,2], // your data array
          borderColor: '#00AEFF',
          fill: false
        }
      ]
    },
    options: {
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          display: true
        }],
        yAxes: [{
          display: true
        }],
      }
    }
  });



}
