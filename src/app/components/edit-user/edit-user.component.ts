import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userEditedForm:FormGroup;
  
  editedUser:any;
  id:number;
  
  constructor(private router:Router, private userService:UserService, private activatedRoute:ActivatedRoute,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.userEditedForm =  this.formBuilder.group({
      FName: [''],
      LName: ['']
    });

    this.id=+this.activatedRoute.snapshot.paramMap.get('id');
this.userService.getUserById(this.id).subscribe(data=>{this.editedUser=data;console.log("EditUserComponent -> ngOnInit -> editedUser", this.editedUser)})

  }
  validateEdit(){
    // this.router.navigate(['admin-space'])
    // // traja3ni lel page admin
    
    this.userService.editUser(this.editedUser).subscribe(
      () => {
        this.router.navigate(['admin-space']);
      }
    )
    
  }

}
