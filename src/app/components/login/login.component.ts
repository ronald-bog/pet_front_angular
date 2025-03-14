import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs';
import { SecurityService } from 'src/app/services/security.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  showLogin = 1;
  correo: string = "";
  password: string = "";
  private security = inject(SecurityService);
  private router = inject(Router);

  login() {
    const usuario = { email: this.correo, password: this.password };
    this.security.login(usuario).pipe(tap((data: any) => {
      this.router.navigate(['catalog']);
      sessionStorage.setItem('session', data.token);
      sessionStorage.setItem('id', data.id);
    }),
      catchError(error=>{
        this.correo = '';
        this.password ='';
        Swal.fire({
          title: 'Correo o contraseña incorrectos',
          icon: 'error',
          timer: 5000
        });
        throw error;
      })
    ).subscribe();
  }

  closeLogin() {
    this.showLogin = 0;
    this.router.navigate(['']);
   }
}
