import TodoItem from "./TodoItem";

function TodoList({ todos, handleEdit, handleDelete }) {
  return (
    <div className="todo-list">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))
      ) : (
        <p className="no-todos">No todos found.</p>
      )}
    </div>
  );
}

export default TodoList;
