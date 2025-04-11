import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Region } from '../models/region';

@Injectable({ providedIn: 'root' })
export class RegionService {
  private baseUrl = 'http://localhost:8080/regions';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Region[]> {
    return this.http.get<Region[]>(this.baseUrl);
  }

  getById(id: number): Observable<Region> {
    return this.http.get<Region>(`${this.baseUrl}/${id}`);
  }

  create(region: Region): Observable<Region> {
    return this.http.post<Region>(this.baseUrl, region);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
