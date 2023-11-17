import './App.css';

import { useState } from 'react';

import Button from './components/CoolButton.js';
import CoolButton from './components/CoolButton.js';
import "react-router-dom": "^6.19.0";


/* 
sil butonunun yanına düzenle butonu gelecek,
basınca inputValue değeri olarak ayarlanacak, sonrasında ekle diyip tekrar ekleyebili

useEffect, useRef, context api, props, react-router-dom

 */
const App = () => {
  const [age, setAge] = useState(23);
  const [hobies, setHobies] = useState([
    {
      name: 'test1',
    },
    {
      name: 'test2',
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleIncrease = () => {
    setAge(age + 1);
  };

  const handleDiscrease = () => {
    setAge(age - 1);
  };

  const addHobbie = () => {
    setHobies([...hobies, { name: inputValue }]);
    setInputValue('');
  };

  const handleDelete = index => {
    setHobies([...hobies.filter((item, i) => i !== index)]);
  };

  const handleEdit = (item, index) => {
    setInputValue(item?.name);
    handleDelete(index);
  };
  

  return (
    <div>
      <CoolButton />
      <button onClick={handleDiscrease}>-</button> {age}
      <button onClick={handleIncrease}>+</button>
      <br />
      <input
        value={inputValue}
        onChange={event => {
          setInputValue(event.target.value);
        }}
      />{' '}
      <button onClick={addHobbie}>Ekle</button>
      <br />
      {hobies.map((item, index) => (
        <p>
          <b>{item.name}</b>
          <button onClick={() => handleEdit(item, index)}> Edit</button>
          <button onClick={() => handleDelete(index)}> Sil</button>
        </p>
      ))}
    </div>
  );
};

export default App;