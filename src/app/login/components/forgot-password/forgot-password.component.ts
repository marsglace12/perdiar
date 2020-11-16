import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'app/login/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  public forgotPasswordForm: FormGroup;
  constructor(
    public authService: AuthService,
    private fb: FormBuilder
  ) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    })
   }

  ngOnInit(): void {
  }

  get f() {
    return this.forgotPasswordForm.controls;
  }
  
  resetPassword() {
    if (this.forgotPasswordForm.valid) {
      this.authService.ForgotPassword(this.forgotPasswordForm.value);
    }
    this.forgotPasswordForm.markAllAsTouched();
  }

}
