export interface ITodo{
    todos: ITodoItem[];
}

export type ITodoItem = {
    todoid: Date;
    text: string;
    user_id: number;
}