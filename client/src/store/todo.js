import  {makeAutoObservable} from 'mobx'

export default class TodoStore{
    constructor(){
        this._todos = [];
        makeAutoObservable(this)
    }
    setTodo(todo){
        this._todos = todo
    }
    get todo(){
        return this._todos
    }
}