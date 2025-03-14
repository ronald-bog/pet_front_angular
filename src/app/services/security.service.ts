import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  private http = inject(HttpClient);

  login(infoUsuario:any): Observable<any>{
    return this.http.post<any>(`${environment.backend}/auth`, infoUsuario)
  }
}
