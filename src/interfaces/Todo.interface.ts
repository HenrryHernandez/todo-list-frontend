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

export interface In_DeleteTodoResponse {
  ok: boolean;
  msg: string;
}

export interface ITodo {
  id: number;
  title: string;
  description: string;
  images: IImage[];
}

export interface IImage {
  ok?: boolean;
  msg?: string;
  id: number;
  imageName: string;
}

export interface Out_UpdateTodoInfo {
  title: string;
  description: string;
}
