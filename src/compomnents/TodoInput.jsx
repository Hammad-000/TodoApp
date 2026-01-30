function TodoInput({ newTodo, setNewTodo, handleAdd, editId }) {
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleAdd();
    }
  }

  return (
    <div className="input-section p-2">
      <input
        type="text"
        placeholder="Enter todo..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleAdd}>{editId ? "Update" : "Add"}</button>
    </div>
  );
}

export default TodoInput;
