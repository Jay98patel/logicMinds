import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;
  skills:FormArray;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.userForm = this.fb.group({
      name: [''],
      age: [],
      mobileNumber: [],
      country: [],
      gender: [],
      termsCondition: [],
      skills: this.fb.array([])
    });
  }

  addSkills() {
    let skillControl: FormGroup = this.fb.group({ technicalSkills: ['', Validators.required] })
    this.skills = this.userForm.get('address') as FormArray;
    this.skills.push(skillControl)
  }

  saveUserDetails() {
    console.log(this.userForm.value)
  }

}
