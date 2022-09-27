export interface UserInterface{
    username: string,
    password: string
}

export class User implements UserInterface{
    username: string;
    password: string;

    constructor(userCfg: UserInterface){
        this.username = userCfg.username;
        this.password = userCfg.password;
    }
}