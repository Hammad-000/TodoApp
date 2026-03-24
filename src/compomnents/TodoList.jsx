function TodoList({ todos, handleEdit, handleDelete }) {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} className="todo-item">
          <div>
            <span>{todo.text}</span>
            <br />
            <small style={{ color: "gray" }}>{todo.date}</small>
          </div>

          <div>
            <button onClick={() => handleEdit(todo.id)}>Edit</button>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;