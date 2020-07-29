import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: ['']
    });
  }


  loginFormControls(key: string) {
    return this.loginForm.get(key);
  }


  submit(form: FormGroup) {
    console.log(form.value);
  }

  onCancel(form: FormGroup) {
    form.reset();
  }

}
