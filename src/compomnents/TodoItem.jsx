function TodoItem({ todo: { id, text }, handleEdit, handleDelete }) {
  return (
    <div className="todo-item">
      <span>{text}</span>

      <div>
        <button
          className="edit-btn"
          aria-label="Edit todo"
          onClick={() => handleEdit(id)}
        >
          ✏️ Edit
        </button>

        <button
          className="delete-btn"
          aria-label="Delete todo"
          onClick={() => handleDelete(id)}
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;