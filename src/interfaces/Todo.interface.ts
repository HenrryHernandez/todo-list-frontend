export interface In_GetTodosResponse {
  ok: boolean;
  msg: string;
  todos: ITodo[];
}

export interface In_CreateTodoResponse {
  ok: boolean;
  msg: string;
  todo: ITodo;
}

export interface ITodo {
  id: number;
  title: string;
  description: string;
  images: IImage[];
}

export interface IImage {
  id: number;
  imageName: string;
}

export interface Out_CreateTodo {
  title: string;
  description: string;
}
