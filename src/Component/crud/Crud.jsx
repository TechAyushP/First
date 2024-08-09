import React, { useState } from 'react';

const Crud = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editTodo, setEditTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo }]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleEditTodo = (index) => {
    setEditIndex(index);
    setEditTodo(todos[index].text);
  };

  const handleUpdateTodo = () => {
    const updatedTodos = todos.map((todo, index) =>
      index === editIndex ? { ...todo, text: editTodo } : todo
    );
    setTodos(updatedTodos);
    setEditIndex(null);
    setEditTodo('');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Todo List</h1>

      <div>
        <input
          type="text"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          
        />
        <button
          onClick={handleAddTodo}
          
        >
          Add Todo
        </button>
      </div>

      <ul style={{ listStyle: 'none', paddingLeft: '0', marginTop: '20px' }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            {editIndex === index ? (
              <span>
                <input
                  type="text"
                  value={editTodo}
                  onChange={(e) => setEditTodo(e.target.value)}
                  style={{ padding: '5px', marginRight: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                />
                <button
                  onClick={handleUpdateTodo}
                  
                >
                  Update
                </button>
                <button
                  onClick={() => setEditIndex(null)}
                  
                >
                  Cancel
                </button>
              </span>
            ) : (
              <span>
                <span style={{ marginRight: '10px' }}>{todo.text}</span>
                <button
                  onClick={() => handleEditTodo(index)}
                                  >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteTodo(index)}
                  
                >
                  Delete
                </button>
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Crud;
