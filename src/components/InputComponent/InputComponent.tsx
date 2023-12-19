import React from 'react';
import './InputComponent.css';

function InputComponent(props:any) {
  return (
      <div
        className='InputComponentBox'
      >
        <input 
            className='InputArea'
            id={props.IDINPUT}
            placeholder={props.PLACEHOLDERINPUT}
            type={props.TYPEINPUT}
            onChange={props.CHANGEINPUT}
        />
      </div>
  );
}

export default InputComponent;
 
































