import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  @ViewChild('username') userName: ElementRef
  @ViewChild('password') password: ElementRef
  router: Router = inject(Router)
  activeRoute: ActivatedRoute = inject(ActivatedRoute)

  authService: AuthService = inject(AuthService)

ngOnInit(): void {
  this.activeRoute.queryParamMap.subscribe(query => {
   let logout = Boolean(query.get('logout'))
   if(logout)
    this.authService.logout()
  })
}

  OnLogin() {
    let username = this.userName.nativeElement.value
    let password = this.password.nativeElement.value
    const user = this.authService.login(username, password)
    if(!user)
      alert('Invalid username or password')
    else
    alert("Welcome")
    this.router.navigate(['/Courses'])
  }
}
