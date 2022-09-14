import {Transaction} from "./Transaction";

export class Compte{


    id!: number;

    name: string = "";

    solde!: number;

    transactions: Transaction[]=[];


    public constructor(init?: Partial<Compte>) {
        Object.assign(this, init);
    }



}
