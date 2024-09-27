import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';

export interface UserData{
  email: String,
  password: String
}
@Component({
  selector: 'app-email-sign-up',
  templateUrl: './email-sign-up.component.html',
  standalone: true,
  styleUrls: ['./email-sign-up.component.css'],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class EmailSignUpComponent {

  userData : UserData = {
    email: "",
    password: ""
  }

  constructor(private router: Router) {}

  logIn() {
    this.router.navigate(['/home']);
  }

  update(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
  }

}
