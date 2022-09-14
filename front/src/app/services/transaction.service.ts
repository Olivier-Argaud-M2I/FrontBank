import { Injectable } from '@angular/core';
import {Constante} from "../Constante";
import {HttpClient} from "@angular/common/http";
import {Compte} from "../models/Compte";
import {Transaction} from "../models/Transaction";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  apiUrl: string = Constante.API_URL;

  constructor(private http: HttpClient) { }

  getTransaction(id:string){
    return this.http.get<Transaction>(this.apiUrl+"/transactions/"+id)
  }

  getTransactions(){
    return this.http.get<Transaction[]>(this.apiUrl+"/transactions/all")
  }

  getTransactionsByCompte(id:number){
    return this.http.get<Transaction[]>(this.apiUrl+"/transactions/compte/"+id)
  }

  saveTransaction(formData:any){
    return this.http.post<Transaction>(this.apiUrl+"/transactions/save",formData)
  }

  deleteTransaction(id:string){
    return this.http.delete<Transaction>(this.apiUrl+"/transactions/delete/"+id)
  }

}
