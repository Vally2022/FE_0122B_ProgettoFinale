import { Cliente } from "./cliente"
export interface Fattura 
{
    id: number,
    data: string,
    numero: 2,
    anno: number,
    importo: number,
    stato: {
        id: number,
        nome: string
    }
    cliente:any
}
        