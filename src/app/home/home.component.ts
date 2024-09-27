import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  standalone: true,
  styleUrls: ['home.component.css'],
  imports: [ RouterModule, NavbarComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class HomeComponent {}