import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl = 'https://api.cricapi.com/v1/currentMatches'; // CricAPI endpoint
  private apiKey = 'd8b25fe6-5b38-4099-a9bc-22a6f05b33c6'; // Replace with your actual API key
  constructor(private http:HttpClient) { }
  // getLiveMatches(){
  //   return this.http.get(this.apiUrl)
  // }
  // getLiveMatches(): Observable<any> {
  //   return this.http.get<any>(this.apiUrl);
  // }
  getLiveMatches(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?apikey=${this.apiKey}`);
  }
}
