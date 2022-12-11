import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  erreur =0;
  constructor(private authService : AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }
  onLoggedin()
  {
  console.log(this.user);
  let isValidUser: Boolean = this.authService.SignIn(this.user);
if (isValidUser)
this.router.navigate(['/motors']);
else
   //alert('Login or password wrong!');
   this.erreur=1;

  }
}
