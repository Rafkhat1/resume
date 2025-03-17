import { useState, useEffect } from 'react';
import PageStructure from '../components/PageStructure';
import PomodoroTimer from '../components/PomodoroTimer';
import './App.css';

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [
      { id: 1, text: 'Learn React', status: 'In Progress' },
      { id: 2, text: 'Push-ups', status: 'Completed' },
      { id: 3, text: 'Sit-ups', status: 'In Progress' },
    ];
  });
  const [filter, setFilter] = useState('');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, status: 'In Progress' };
    setTodos((prev) => [...prev, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  const toggleStatus = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              status: todo.status === 'In Progress' ? 'Completed' : 'In Progress',
            }
          : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={`App ${theme}`}>
      <button
        className="theme-toggle"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        Toggle {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
      <PageStructure
        todos={filteredTodos}
        addTodo={addTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        toggleStatus={toggleStatus}
        filter={filter}
        setFilter={setFilter}
      />
      <PomodoroTimer />
    </div>
  );
}

export default App;