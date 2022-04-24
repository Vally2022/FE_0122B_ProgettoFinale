export interface Utente {
    id: number,
    username: string,
    email: string,
    password: string,
    roles: [
        {
            id: number,
            roleName: string
        }
    ]
    accessToken:string,
    tokenType:string
}
