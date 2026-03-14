function TodoInput({ newTodo, setNewTodo, handleAdd, editId }) {
  function handleKeyDown(e) {
    if (e.key === "Enter" && newTodo.trim()) {
      handleAdd();
    }
  }

  return (
    <div className="input-section p-2">
      <input
        type="text"
        placeholder="Enter todo..."
        aria-label="Todo input"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button onClick={handleAdd} disabled={!newTodo.trim()}>
        {editId ? "Update" : "Add"}
      </button>
    </div>
  );
}

export default TodoInput;