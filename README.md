# FE0122BProgettoFinale

# header H1
Il progetto finale è la realizzazione di un'applicazione CRM.


# TECNOLOGIE
La parte grafica è stata interamente implementata in sass con componenti Bootstrap.

# SCAFOLDING
L'applicazione è realizzata in due parti, navbar-pre, login, signup sono inserite all'interno dell'auth-routing module.
La seconda parte è composta dalla navbar-main da cui è possibile navigare sui principali componenti (ognuno collegato al proprio service per gestire le chiamate API) dopo il login:
-homepage: prima pagina visualizzata dopo il login,
-lista-utenti
-lista-componenti
-fatture

# FUNZIONALITA'
Le principali funzionalità sono:
-invio di form contatti con la memorizzazione dei dati nel localstorage
-visualizzazione delle fatture di uno specifico cliente, a partire dalla lista-clienti (componente dettaglio-fattura)
-possibilità di modificare le informazioni di uno specifico cliente, a partire dalla lista-clienti(componente dettaglio-cliente)
-possibilità di eliminare una fattura o un cliente