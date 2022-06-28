export interface ITodo{
    todos: ITodoItem[];
}

export type ITodoItem = {
    todoId: Date;
    text: string;
    user_id: number;
}