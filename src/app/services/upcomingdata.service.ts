import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpcomingdataService {
  private apiUrl = 'https://api.cricapi.com/v1/currentMatches'; // CricAPI endpoint
  private apiKey = 'd8b25fe6-5b38-4099-a9bc-22a6f05b33c6';
  constructor(private http:HttpClient) { }
  getUpcomingMatches(): Observable<any> {
    const url = `${this.apiUrl}/matches?apikey=${this.apiKey}&status=upcoming`;
    return this.http.get(url);  }
}
