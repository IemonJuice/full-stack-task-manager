import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormsModule,

  ReactiveFormsModule,
  Validators
} from "@angular/forms";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  constructor(private fb:FormBuilder) {
  }

  myForm:any = this.fb.group({
    email: ['',Validators.required],
    password: ['', Validators.required]
  })
}
