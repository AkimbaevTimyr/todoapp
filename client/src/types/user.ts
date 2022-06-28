export interface IUser{
    isAuth: boolean;
    user: IUserItem;
    userId: number;
}

export type IUserItem = {
    email: string;
    password: string
}