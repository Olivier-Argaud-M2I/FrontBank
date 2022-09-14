import {Compte} from "./Compte";

export class Transaction{

    id!: number;

    title: string = "";

    montant!: number;

    reccuring!:boolean;

    compte!:Compte;



    public constructor(init?: Partial<Transaction>) {
      Object.assign(this, init);
    }




}
