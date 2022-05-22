import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../service/app.service';
import { map } from 'rxjs/operators';
import { Usuario } from 'src/app/models/usuario.model';
import { Data } from '../../models/data.interface';
import { Router } from '@angular/router';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registroForm!: FormGroup
  cargando: boolean = false;
  public data!: Data;


  constructor(private fb: FormBuilder,
              private route: Router,
              private service: UsuarioService ) { }

  ngOnInit(): void {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required ],
      correo: ['', [Validators.required, Validators.email] ],
      password: ['', Validators.required ],
    });
  }


  crearUsuario(){
    if(this.registroForm.invalid){ return;}
    const { nombre, correo, password} = this.registroForm.value;
    const data = {name_user: nombre, email: correo, password: password, id_role: 1,}
    this.service.setUser(data)
    .subscribe( (d: Data) => {
      if( d.status == true){
        this.route.navigate(['/']);
        this.registroForm.reset();
      }
      else{
        this.registroForm.reset();
      }
    })

    // this.authService.crearUsuario( nombre, correo, password)
    // .then( credenciales => { console.log(credenciales);
    // // Swal.close();
    // this.store.dispatch( ui.stopLoading() );
    // this.route.navigate(['/']);
    // })
    // .catch( err => {
    //   this.store.dispatch( ui.stopLoading() );
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Oops...',
    //     text: err.message,
    //   })
    // });  

  }

}
