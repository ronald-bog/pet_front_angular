import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private http = inject(HttpClient)

  constructor() { }

  galeria(page: number, option: number): Observable<any> {
    const body = {
      page: page,
      option: option
    }
    return this.http.post<any>(`${environment.backend}/galeria`, body)
  }

  like(id: number): Observable<any> {
    return this.http.post<any>(`${environment.backend}/like`, { id: id })
  }

  visit(id: number): Observable<any> {
    return this.http.post<any>(`${environment.backend}/visit`, { id: id })
  }
}
