import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Constante} from "../Constante";
import {Compte} from "../models/Compte";

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  apiUrl: string = Constante.API_URL;

  constructor(private http: HttpClient) { }

  getCompte(id:string){
    return this.http.get<Compte>(this.apiUrl+"/comptes/"+id)
  }

  getComptes(){
    return this.http.get<Compte[]>(this.apiUrl+"/comptes/all")
  }

  saveCompte(formData:Compte){
    return this.http.post<Compte>(this.apiUrl+"/comptes/save",formData)
  }

  deleteCompte(id:string){
    return this.http.post<Compte>(this.apiUrl+"/comptes/delete/"+id,null)
  }

}
