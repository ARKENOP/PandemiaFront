import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalData } from '../models/global-data';

@Injectable({ providedIn: 'root' })
export class GlobalDataService {
  private baseUrl = 'http://localhost:8080/globaldata';

  constructor(private http: HttpClient) {}

  getAll(): Observable<GlobalData[]> {
    return this.http.get<GlobalData[]>(this.baseUrl);
  }

  getById(id: number): Observable<GlobalData> {
    return this.http.get<GlobalData>(`${this.baseUrl}/${id}`);
  }

  create(globalData: GlobalData): Observable<GlobalData> {
    return this.http.post<GlobalData>(this.baseUrl, globalData);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
