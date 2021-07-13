export interface User {
    id?: string;
    login?: string;
    name?: string;
    type?: UserType;
}

export enum UserType {
    Admin = 'ADM',
    Player = 'PLAYER'
}
