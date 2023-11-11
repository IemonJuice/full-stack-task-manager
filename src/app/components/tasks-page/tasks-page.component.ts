import {Component} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {HttpService} from "../../services/http.service";
import {HttpClientModule} from "@angular/common/http";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import { Task } from '../../models/Task';

@Component({
  selector: 'app-tasks-page',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, HttpClientModule, ReactiveFormsModule],
  templateUrl: './tasks-page.component.html',
  styleUrl: './tasks-page.component.scss'
})
export class TasksPageComponent {

  taskForm:any;
  tasks:Array<Task> = []
  constructor(private http: HttpService,private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      taskName: ['',Validators.required],
      taskDescription: ['', Validators.required]
    })
    this.getAllTasks();
  }
  addTask(){
    let task:Task = {task_name:this.taskForm.value.taskName,task_description:this.taskForm.value.taskDescription};
    console.log(task);
    this.http.sendPost(task).subscribe(response => {
      this.getAllTasks();
    })

  }
  getAllTasks(){
    this.http.getRequest().subscribe(response => {
      console.log(response);
      this.tasks = response as Array<Task>;
    });
  }
}
