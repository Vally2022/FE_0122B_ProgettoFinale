import { Comuni } from "./comuni"
import { Province } from "./province"

export interface Cliente {
    id: number,
    ragioneSociale: string,
    partitaIva: string,
    tipoCliente: string,
    email: string,
    pec: string,
    telefono: string,
    nomeContatto: string,
    cognomeContatto: string,
    telefonoContatto: string,
    emailContatto: string,
    indirizzoSedeOperativa: {
        id: number,
        via: string,
        civico: string,
        cap: string,
        localita: string,
        comune: {
            id: number,
            nome: string,
            provincia: {
                id: number,
                nome: string,
                sigla: string
            }
        }
    }
}
