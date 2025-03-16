import { useState } from 'react'
import './App.css'

const list = ["Learn React", "Push-ups", "Sit-ups"];

function PageStructure() {
  return (
    <header className="header">
      <h1>To-Do App</h1>
      <div>
        <ul className="list">
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </header>
  );
}

function App() {
  return (
    <>
      <PageStructure />
    </>
  );
}

export default App;
