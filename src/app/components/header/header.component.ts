import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  isBurgerOpen = false;
  isMenuOpen = false;
  session = 0;
  title:any;
  bar:any =[];
  prueba = 'HOLA MUNDO';
  private general = inject(GeneralService)
  private router = inject(Router)

  ngDoCheck(){
    this.title = this.general.getTitle();
    this.bar = this.general.getBar();
    this.session = sessionStorage.getItem('session') !== null ? 1 : 0;
  }

  toggleMenu(){
    this.isBurgerOpen = !this.isBurgerOpen;
    this.isMenuOpen = !this.isMenuOpen;
  }
  changeTheme (){
    document.body.classList.toggle('dark')
  }

  onSeleccionarOrden(event:Event){
      const selectedValue = (event.target as HTMLSelectElement).value;
      const option = selectedValue === 'antiguos' ? 1 : 2;
      localStorage.setItem('option', String(option));
      location.reload();
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['']);
    this.session = 0;
  }

  logoutB(){
    this.toggleMenu();
    this.logout();
  }
}
