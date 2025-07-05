import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import Auth from './components/Auth';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Load todos from localStorage
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
    
    // Check for logged in user
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  useEffect(() => {
    // Save todos to localStorage
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      const todo = {
        id: Date.now(),
        text: newTodo.trim(),
        completed: false,
        createdAt: new Date().toISOString()
      };
      setTodos([...todos, todo]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  const handleLogin = async (email, password) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const user = { id: 1, name: 'Demo User', email };
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
      setLoading(false);
    }, 1000);
  };

  const handleRegister = async (name, email, password) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const user = { id: 1, name, email };
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
      setLoading(false);
    }, 1000);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  if (!user) {
    return <Auth onLogin={handleLogin} onRegister={handleRegister} />;
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Todo App</h1>
        <div className="user-info">
          <span>Welcome, {user.name}!</span>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </header>
      
      <main className="app-main">
        <form onSubmit={addTodo} className="add-todo-form">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new todo..."
            className="todo-input"
          />
          <button type="submit" className="add-btn" disabled={loading}>
            {loading ? 'Adding...' : 'Add Todo'}
          </button>
        </form>
        
        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />
      </main>
    </div>
  );
}

export default App;