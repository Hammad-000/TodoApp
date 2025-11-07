import { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import SearchBar from "./SearchBar";
import ThemeToggle from "./ThemeToggle";
import "./Todo.css";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editId, setEditId] = useState("");
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  function handleAdd() {
    if (!newTodo.trim()) return;

    if (editId) {
      setTodos(
        todos.map((todo) =>
          todo.id === editId ? { ...todo, text: newTodo } : todo
        )
      );
      setEditId("");
      setNewTodo("");
    } else {
      setTodos([...todos, { id: Date.now(), text: newTodo }]);
      setNewTodo("");
    }
  }

  function handleDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function handleEdit(id) {
    const todo = todos.find((todo) => todo.id === id);
    setEditId(id);
    setNewTodo(todo.text);
  }

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={`todo-container ${theme}`}>
      <ThemeToggle theme={theme} setTheme={setTheme} />

      <h2 className="logo">
        <img
          src={
            theme === "dark"
              ? "/src/images/edit-3-svgrepo-com (2).svg"
              : "./src/images/edit-3-svgrepo-com.svg"
          }
          alt="Todo Logo"
        />
        Todo App
      </h2>

      <TodoInput
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        handleAdd={handleAdd}
        editId={editId}
      />

      <SearchBar search={search} setSearch={setSearch} />

      <TodoList
        todos={filteredTodos}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default TodoApp;
