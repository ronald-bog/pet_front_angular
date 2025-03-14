import { Component, inject } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html'
})
export class GaleriaComponent {
  catalog: any = [];
  page = 1;
  lightbox = 0;
  currentIndex = 0;
  totalImages = 0;

  private general = inject(GeneralService);
  private backend = inject(BackendService);
  option = Number(localStorage.getItem('option'));
  likes: any = [];
  spinner = 1;

  ngOnInit() {
    this.list();
    this.general.setBar([1, 1, 1])
    this.general.setTitle('Galeria');
    this.likes = JSON.parse(localStorage.getItem('likes') ?? '[]');
  }

  list() {
    this.backend.galeria(this.page, this.option).subscribe(data => {
      this.catalog = data;
      this.totalImages = this.catalog.length;
      this.spinner = 0;
    })
  }

  onScrollDown() {
    this.page++;
    this.backend.galeria(this.page, this.option).subscribe(data => {
      this.catalog = this.catalog.concat(data);
      this.totalImages = this.catalog.length;
      console.log(this.catalog);
    })
  }

  onLightbox(index: any, id: any) {
    document.body.style.overflow = 'hidden';
    this.lightbox = 1;
    this.currentIndex = index;
    this.backend.visit(id).subscribe(() => this.list());
  }

  offLightbox() {
    document.body.style.overflow = 'auto';
    this.lightbox = 0;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.totalImages) % this.totalImages;
  }
  next() {
    this.currentIndex = (this.currentIndex + 1) % this.totalImages;
  }

  like(i: any) {
    this.backend.like(i).subscribe(() => {
      this.likes.push(i);
      this.list();
      localStorage.setItem('likes', JSON.stringify(this.likes));
    })
  }
}
