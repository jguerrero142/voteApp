import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/service/app.service';
import { Data } from '../../models/data.interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  loginform!: FormGroup;
  cargando: boolean = false;

  constructor(private fb: FormBuilder,
              private route: Router,
              private service: UsuarioService){
    
  }

  ngOnInit(): void {
    this.loginform = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required]]
    });    
  }


  login(){
    const {email} = this.loginform.value;
    const data = { email: email}
    this.service.login(data)
    .subscribe( (d: Data) => {
      if(d.status == true){
        console.log(d)
        console.log(d.status)
      this.route.navigate(['/dashboard']);
      }
      else{
      this.loginform.reset();
      }
    })
    
    // if(this.loginform.invalid){ return; }
  }

}
