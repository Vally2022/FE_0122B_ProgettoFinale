import { Comuni } from "./comuni";
import { Province } from "./province";

export interface IndirizzoSedeLegale {
    
        id: number,
        via: string,
        civico: string,
        cap: string,
        localita: string,
        comune: Comuni,
        provincia: Province
    
}
