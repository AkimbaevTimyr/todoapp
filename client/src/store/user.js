import { makeAutoObservable } from "mobx";


export default class UserStore{
    constructor(){
        this._isAuth = false
        this._user = {}
        this._userId =  0
        makeAutoObservable(this)
    }
    setAuth(bool){
        this._isAuth = bool
    }
    setUser(user){
        this._user = user
    }
    setUserId(id){
        this._userId = id
    }
    get user(){
        return this._user
    }
    get isAuth(){
        return this._isAuth
    }
    get userId(){
        return this._userId
    }
    
}
