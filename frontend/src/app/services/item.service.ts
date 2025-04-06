import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private backendUrl = environment.backendUrl;
  constructor(private http: HttpClient) {}

  getItems(): Observable<string[]> {
    return this.http.get<string[]>(`${this.backendUrl}/items`)
  }
}
