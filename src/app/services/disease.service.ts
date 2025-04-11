import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Disease } from '../models/disease';

@Injectable({ providedIn: 'root' })
export class DiseaseService {
  private baseUrl = 'http://localhost:8080/diseases';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Disease[]> {
    return this.http.get<Disease[]>(this.baseUrl);
  }

  getById(id: number): Observable<Disease> {
    return this.http.get<Disease>(`${this.baseUrl}/${id}`);
  }

  create(disease: Disease): Observable<Disease> {
    return this.http.post<Disease>(this.baseUrl, disease);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
