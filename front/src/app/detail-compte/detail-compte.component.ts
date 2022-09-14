import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CompteService} from "../services/compte.service";
import {TransactionService} from "../services/transaction.service";
import {Compte} from "../models/Compte";
import {Transaction} from "../models/Transaction";
import {FormBuilder, Validators} from "@angular/forms";
import {interval} from "rxjs";

@Component({
  selector: 'app-detail-compte',
  templateUrl: './detail-compte.component.html',
  styleUrls: ['./detail-compte.component.css']
})
export class DetailCompteComponent implements OnInit {

  compte!:Compte;
  transactions:Transaction[]=[];

  titleCtrl = this.fb.control('',[Validators.required]);
  montantCtrl = this.fb.control('',[Validators.required]);
  reccuringCtrl = this.fb.control('',[Validators.required]);
  idCtrl = this.fb.control('',[Validators.required]);

  transactionForm = this.fb.group({
    title:this.titleCtrl,
    montant:this.montantCtrl,
    reccuring:this.reccuringCtrl,
    id:this.idCtrl
  });


  constructor(
    private route:ActivatedRoute,
    private compteService:CompteService,
    private transactionService:TransactionService,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    interval(2000).subscribe(
      ()=>{
        this.getCompte();
      }
    )

  }

  getCompte(){
    const id = this.route.snapshot.paramMap.get('id');
    if(id!=null){
      this.compteService.getCompte(id).subscribe(
        (response)=>{
          this.compte = response;
          this.getTransactions();
        }
      )
    }

  }

  getTransactions(){
    this.transactionService.getTransactionsByCompte(this.compte.id).subscribe(
      (response)=>{
        this.transactions = response;
      }
    )
  }


  delete(transaction:Transaction){
    this.transactionService.deleteTransaction(transaction.id+"").subscribe(
      ()=>{
        this.getCompte();
      }
    );
  }

  create(){

    let transac:Transaction = new Transaction();
    // @ts-ignore
    transac.id = this.transactionForm.get('id').value;
    // @ts-ignore
    transac.title = this.transactionForm.get('title').value;
    // @ts-ignore
    transac.montant = this.transactionForm.get('montant').value;

    // @ts-ignore
    transac.reccuring = this.transactionForm.get('reccuring').value ? this.transactionForm.get('reccuring').value : false;
    transac.compte = this.compte;
    this.transactionService.saveTransaction(transac).subscribe(
      (response)=>{
        this.getCompte();
        this.transactionForm.reset();
      }
    )
  }


  edit(transaction:Transaction ){

    // @ts-ignore
    this.transactionForm.get('id').patchValue(transaction.id);
    // @ts-ignore
    this.transactionForm.get('title').patchValue(transaction.title);
    // @ts-ignore
    this.transactionForm.get('montant').patchValue(transaction.montant);
    // @ts-ignore
    this.transactionForm.get('reccuring').patchValue(transaction.reccuring);


  }

}
