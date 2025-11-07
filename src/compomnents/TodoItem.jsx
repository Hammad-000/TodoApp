function TodoItem({ todo, handleEdit, handleDelete }) {
  return (
    <div className="todo-item">
      <span>{todo.text}</span>
      <div>
        <button className="edit-btn" onClick={() => handleEdit(todo.id)}>
          ✏️ Edit
        </button>
        <button className="delete-btn" onClick={() => handleDelete(todo.id)}>
          🗑️ Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
