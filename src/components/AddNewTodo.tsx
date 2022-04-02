interface Props {
  createTodo: () => Promise<void>;
}

export const AddNewTodo = ({ createTodo }: Props) => {
  return (
    <div className="add-new-todo">
      <button className="btn add-new-todo__button" onClick={createTodo}>
        Add new+
      </button>
    </div>
  );
};
