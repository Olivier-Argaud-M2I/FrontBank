import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {DetailCompteComponent} from "./detail-compte/detail-compte.component";

const routes: Routes = [

  { path: '',                     component: HomeComponent                      },
  { path: 'home',                 component: HomeComponent                      },
  { path: 'comptedetail/:id',       component: DetailCompteComponent            }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
