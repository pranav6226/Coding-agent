import React, { useState, useEffect } from 'react';
import './TodoList.css';

const TodoList = ({ todos, onToggle, onDelete, onEdit }) => {
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleEdit = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const handleSave = (id) => {
    onEdit(id, editText);
    setEditingId(null);
    setEditText('');
  };

  return (
    <div className="todo-list">
      {todos.map(todo => (
        <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
          {editingId === todo.id ? (
            <div className="edit-mode">
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="edit-input"
              />
              <button onClick={() => handleSave(todo.id)} className="save-btn">
                Save
              </button>
              <button onClick={() => setEditingId(null)} className="cancel-btn">
                Cancel
              </button>
            </div>
          ) : (
            <>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
                className="todo-checkbox"
              />
              <span className="todo-text">{todo.text}</span>
              <div className="todo-actions">
                <button onClick={() => handleEdit(todo)} className="edit-btn">
                  Edit
                </button>
                <button onClick={() => onDelete(todo.id)} className="delete-btn">
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;