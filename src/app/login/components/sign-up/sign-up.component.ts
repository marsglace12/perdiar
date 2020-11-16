import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'app/login/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public signupForm: FormGroup;
  constructor(
    public authService: AuthService,
    private fb: FormBuilder
  ) {
      this.signupForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]]
      });
   }

  ngOnInit(): void {
  }

  get f() {
    return this.signupForm.controls;
  }

  signUp() {
    if (this.signupForm.valid) {
      this.authService.SignUp(this.signupForm.value);
    }
    this.signupForm.markAllAsTouched();
  }
}
