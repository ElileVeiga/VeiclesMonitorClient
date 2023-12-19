import React from 'react';
import './SelectInputComponent.css';

function SelectInputComponent(props:any) {
  return (
      <div
        className='SelectInputComponentBox'
      >
        <select 
            className='SelectInput'
            id={props.IDSELECT}
            onChange={props.CHANGESELECT}    
        >
            <option className='Options' value={'null'}>{props.PLACEINPUT}</option>
            <option className='Options'>{props.OPTS}</option>
            <option className='Options'>{props.OPTS2}</option>

        </select>
      </div>
  );
}

export default SelectInputComponent;
 
































