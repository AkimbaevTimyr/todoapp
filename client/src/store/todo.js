import  {makeAutoObservable} from 'mobx'


export default class TodoStore{
    constructor(){
        this._todos = [];
        this._id = this._todos.length
        makeAutoObservable(this)
    }
    setTodo(todo){
        this._todos = todo
    }
    get todo(){
        return this._todos
    }
    get id(){
        return this._id
    }
}