import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayersdataService {
bestApi='http://localhost:3000/PlayerData'
  constructor(private ts:HttpClient) { }
  Getdata(){
    return this.ts.get(this.bestApi)
  }
  Deletedata(id:any){
    return this.ts.delete(`http://localhost:3000/PlayerData/${id}`)
  }
  addranjidata(product:any){
    return this.ts.post(this.bestApi+'/',product)
  }
  editranjiformdata(product:any){
    return this.ts.put(`http://localhost:3000/PlayerData/${product.id}`,product)  
  }
}
