import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}
  onRegister(form): void {
    this.authService.register(form.value).subscribe(res => {
      this.router.navigateByUrl('/auth');
    });

    console.log('test');
  }
}
