export interface User {
    uid: string;
   email: string;
   displayName: string;
   photoURL: string;
   emailVerified: boolean;
}

export interface AuthInformations {
    username?: string;
    email?: string;
    password: string;
}