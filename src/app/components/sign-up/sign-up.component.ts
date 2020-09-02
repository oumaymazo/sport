import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  userForm:FormGroup;
  constructor( private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.userForm=this.formBuilder.group({
      firstName:['',[Validators.minLength(5),Validators.required]],
      lastName:['',[Validators.minLength(5),Validators.required]],
      email:['',[Validators.email,Validators.required]],
      pwd:['',Validators.required],
      phoneNumber:['',Validators.required],
      


      
    })

  }
  signup(){
    alert ('hello');
  }
}
