import React from 'react';
import styled from 'styled-components';

const TextField = styled.input`
  border: 2px solid #333333;
  padding: 8px 15px;
  border-radius: 2px;
  text-shadow: none;
  box-shadow: none;
  width: 260px;
`;

const Input = ({ changed }) => {
  const setValue = event => {
    const { value } = event.target;
    let val = value.replace(/[,]/g, '.').replace(/[^0-9.]/g, '');

    if (val.indexOf('.') !== -1) {
      const arr = val.split('.');
      if (arr.length > 2 ) {
        const [first, ...rest] = arr;
        val = `${first}.${rest.join('')}`;
      }
    }
    
    if (val > 100000) val = 100000;
    if (val[0] === '.') val = '0' + val;

    event.target.value = val;
    changed(+val);
  }

  return <TextField type="text" onChange={setValue} />;
}

export default Input;
