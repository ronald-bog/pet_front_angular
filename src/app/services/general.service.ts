import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  bar: number[] = [];
  title!: string;

  constructor() { }

  setBar(value: number[]): void {
    this.bar = value;
  }

  getBar(): number[] {
    return this.bar;
  }

  setTitle(value: string): void {
    this.title = value;
  }

  getTitle(): string {
    return this.title;
  }
}
