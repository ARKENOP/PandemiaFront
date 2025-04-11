import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Continent } from '../models/continent';

@Injectable({ providedIn: 'root' })
export class ContinentService {
  private baseUrl = 'http://localhost:8080/continents';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Continent[]> {
    return this.http.get<Continent[]>(this.baseUrl);
  }

  getById(id: number): Observable<Continent> {
    return this.http.get<Continent>(`${this.baseUrl}/${id}`);
  }

  create(continent: Continent): Observable<Continent> {
    return this.http.post<Continent>(this.baseUrl, continent);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
