import { Comuni } from "./comuni";



export interface IndirizzoSedeOperativa {
    id: number,
        via: string,
        civico: string,
        cap: string,
        localita: string,
        comune: Comuni
}
