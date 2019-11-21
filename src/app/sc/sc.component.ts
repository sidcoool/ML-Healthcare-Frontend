import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { environment } from 'src/environments/environment'

@Component({
  selector: 'app-sc',
  templateUrl: './sc.component.html',
  styleUrls: ['./sc.component.css']
})
export class ScComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  selectedFile: File
  fileName: string = "No Image Selected !"
  scResult: string = ""
  progress: string = "Upload Progress: 0%"

  onFileChanged(event) {
    this.progress = "Upload Progress: 0%"
    this.selectedFile = event.target.files[0]
    this.fileName = this.selectedFile.name
  }

  onUpload() {
    // this.http is the injected HttpClient
    const uploadData = new FormData();
    uploadData.append('scfile', this.selectedFile, this.selectedFile.name);
    this.http.post<any>(environment.apiURL + '/file', uploadData, {
      reportProgress: true,
      observe: 'events'
    }).subscribe(event => {
      if(event.type === HttpEventType.UploadProgress){
        this.progress = "Upload Progress: " + Math.round(event.loaded / event.total * 100) + "%"
      }
      else if(event.type === HttpEventType.Response) {
        this.scResult = event.body.result
        console.log(this.scResult)
      }
    });
  }



}
