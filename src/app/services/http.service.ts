import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Task} from "../models/Task";

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  constructor(private http:HttpClient) {

  }
  sendPost(task:Task){
    let url:string = "http://localhost:8080/tasks"
    return this.http.post(url,task);
  }
  getRequest(){
    let url:string = "http://localhost:8080/tasks/get"
    return this.http.get(url);
  }
}
