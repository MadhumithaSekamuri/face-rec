import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  years: { label: string; value: string; }[];
  departments: { label: string; value: string; }[];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.years = [
      { label: 'I', value: 'first' },
      { label: 'II', value: 'second' },
      { label: 'III', value: 'Third' },
      { label: 'IV', value: 'fourth' },
    ];

    this.departments = [
      { label: 'CSE', value: 'cse' },
      { label: 'IT', value: 'IT' },
      { label: 'MECH', value: 'mech' },
      { label: 'CIVIL', value: 'civil' },
      { label: 'EEE', value: 'eee' },
      { label: 'ECE', value: 'ece' },
      { label: 'BIOTECH', value: 'biotech' },
      { label: 'E&I', value: 'ei' },
    ];
    this.signupForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      year: ['', Validators.required],
      department: ['', Validators.required],
      role: ['student']
    });
  }

  signupFormControls(key: string) {
    return this.signupForm.get(key);
  }

  submit(form: FormGroup) {
    console.log(form.value);
  }

  onCancel(form: FormGroup) {
    form.reset();
    form.get('role').setValue('student');
  }
}
