import React, { ChangeEvent, useState } from 'react';
import axios from 'axios';

import './styles.css';

const FirstScreen = () => {
  const [value, setValue] = useState<string | undefined>('');

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setValue(value);
  }

  return (
    <div className="first-screen">
      Поиск
      <input type="text" value={value} onChange={handleInput} />
      <p>Result: { value } </p>
    </div>
  )
};

export { FirstScreen };