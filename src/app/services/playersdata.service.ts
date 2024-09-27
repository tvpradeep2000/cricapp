import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersdataService {
bestApi='http://localhost:3000/PlayerData'
  constructor(private http:HttpClient) { }
  Getdata(){
    return this.http.get(this.bestApi)
  }
  Deletedata(id:any){
    return this.http.delete(`http://localhost:3000/PlayerData/${id}`)
  }
  addranjidata(product:any){
    return this.http.post(this.bestApi+'/',product)
  }
  editranjiformdata(product:any){
    return this.http.put(`http://localhost:3000/PlayerData/${product.id}`,product)  
  }
 
}
