import { Auth } from './../../../auth/interfaces/auth.interface';
import { AuthService } from './../../../auth/services/auth.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [ `
  .container {
    margin: 10px;
  }
  `]
})
export class HomeComponent {

  get auth(): Auth {
    return this.authService.auth;
  }

  constructor(private router: Router,
              private authService: AuthService) { }

  logout(): void{
    this.router.navigate(['./auth']);
  }

}
