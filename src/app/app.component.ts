import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pet';
  showButton = false;

  @HostListener('window:scroll')
  scroll(){
    this.showButton = window.scrollY > 500;
  }

  scrollTop(){
    document.documentElement.scrollTop = 0;
  }
}
