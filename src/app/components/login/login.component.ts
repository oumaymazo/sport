import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.userLogin=this.fb.group({
      loginEmail:['',[Validators.email,Validators.required]],
      loginPwd:['',[Validators.maxLength(8),Validators.required]],

    })
  }
login(){
  alert('hello');
}
}
