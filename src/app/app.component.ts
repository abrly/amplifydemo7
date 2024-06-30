import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { Amplify } from 'aws-amplify';
import config from '../amplifyconfiguration.json';
Amplify.configure(config);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MDBBootstrapModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'amplifydemo7';
}
