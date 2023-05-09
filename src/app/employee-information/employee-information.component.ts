import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-information',
  templateUrl: './employee-information.component.html',
  styleUrls: ['./employee-information.component.css']
})
export class EmployeeInformationComponent implements OnInit {
  EmployeeForm!:FormGroup

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.EmployeeForm=this.fb.group({
     EmployeeFirstname:['',Validators.required],
     EmployeeMiddlename:['',Validators.required],
     EmployeeLastname:['',Validators.required],
     Employee_Id:['',[Validators.minLength(1) ,Validators.maxLength(7), Validators.required]],
     Employee_GmailId:['',Validators.required],
     EMobileNo:['',[Validators.minLength(1),Validators.maxLength(10),Validators.required]],
     EAddress1:['',Validators.required],
     EAddress2:['',Validators.required],
     EPincode:['',[Validators.minLength(1),Validators.maxLength(6),Validators.required]],
     EDepartment:['',Validators.required],
    })
  }

}
