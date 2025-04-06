import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private backendUrl = 'http://localhost:3000'
  constructor(private http: HttpClient) {}

  getItems(): Observable<string[]> {
    return this.http.get<string[]>(`${this.backendUrl}/items`)
  }
}
