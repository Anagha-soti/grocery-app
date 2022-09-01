import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import{Router} from '@angular/router'

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  userModel = new User();

  constructor(private auth:AuthService ,private router:Router) {
   }

  ngOnInit(): void {
  }

  onFormSubmit(){
    this.auth.register(this.userModel).subscribe((response)=>{
    console.log(response);
    this.router.navigateByUrl('login');
    }) ;
  }
}
