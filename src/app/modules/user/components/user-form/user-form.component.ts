import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;
  skills: FormArray;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.userForm = this.fb.group({
      name: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(7)]],
      age: [],
      mobileNumber: [],
      country: [],
      gender: [],
      termsCondition: [],
      skills: this.fb.array([
        this.dynamicField()
      ])
    });
  }

  dynamicField(): FormGroup {
    return this.fb.group({
      technicalSkills: ['']
    })
  }

  addSkills() {
    this.skills = this.userForm.get('skills') as FormArray;
    this.skills.push(this.dynamicField())
  }

  saveUserDetails() {
    console.log(this.userForm.value)
  }

}
