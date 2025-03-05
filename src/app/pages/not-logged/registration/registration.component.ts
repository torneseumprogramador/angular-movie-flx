import { Component } from '@angular/core';
import { HeaderComponent } from '../../../components/not-logged/header/header.component';
import { SignUpComponent } from '../../../components/not-logged/sign-up/sign-up.component';

@Component({
  selector: 'app-registration',
  imports: [HeaderComponent, SignUpComponent],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

}
