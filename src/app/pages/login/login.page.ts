import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username = '';
  password = '';
  loading = false;
  submitted = false;


  constructor(private authService: AuthenticationService, private router: Router) {
    if (this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
  }

  login() {
    this.submitted = true;
    this.loading = true;
    this.authService.login(this.username, this.password)
        .pipe(first())
        .subscribe(
            () => {
              this.router.navigateByUrl('list');
            },
            error => {
              console.log(error);
              this.loading = false;
            });
  }
}
