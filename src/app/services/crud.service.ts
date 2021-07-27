import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  save(tablename: string, data: any){
    return this.http.post("http://localhost:3000/" + tablename + "/", data)
  }
  update(tablename: string, data: any){
    return this.http.post("http://localhost:3000/" + tablename + "/" + data.id, data)
  }
  delete(tablename: string, data: any){
    return this.http.delete("http://localhost:3000/" + tablename + "/" + data.id)
  }
  getData(tablename: string){
    console.log("Get Data"+tablename)
    return this.http.get("http://localhost:3000/"+ tablename + "/")
  }
}
