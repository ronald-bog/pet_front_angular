import { Component, inject } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-contac',
  templateUrl: './contac.component.html'
})
export class ContacComponent {
  private general = inject(GeneralService)

  ngOnInit(){
    this.general.setBar([1,0,0])
    this.general.setTitle('Contacto');
  }
}
