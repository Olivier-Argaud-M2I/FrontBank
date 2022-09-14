import { Component, OnInit } from '@angular/core';
import {CompteService} from "../services/compte.service";
import {Compte} from "../models/Compte";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  comptes:Compte[] = [];

  constructor(
    private compteService:CompteService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.compteService.getComptes().subscribe(
      (response)=>{
        this.comptes = response;
      }
    )
  }

  goto(id:number){
    this.router.navigate(['/comptedetail/'+id]);
  }

}
