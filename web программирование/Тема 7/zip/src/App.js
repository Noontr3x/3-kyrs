import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('банан');
  const [todos, setTodos] = useState([{ text: 'Изучить хуки' }]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const changeAge = () => {
    setAge(age + 1);
  };

  const changeFruit = () => {
    setFruit('яблоко');
  };

  const addTodo = () => {
    setTodos([...todos, { text: 'Новая задача' }]);
  };

  return (
    <div>
      <p>Вы нажали {count} раз</p>
      <button onClick={incrementCount}>Нажми на меня</button>

      <p>Возраст: {age}</p>
      <button onClick={changeAge}>Изменить возраст</button>

      <p>Любимый фрукт: {fruit}</p>
      <button onClick={changeFruit}>Изменить фрукт</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo.text}</li>
        ))}
      </ul>
      <button onClick={addTodo}>Добавить задачу</button>
    </div>
  );
}
