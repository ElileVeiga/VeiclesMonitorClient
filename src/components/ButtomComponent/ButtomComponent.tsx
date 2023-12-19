import React from 'react';
import './ButtomComponent.css';

function ButtomComponent(props:any) {
  return (
      <div
        className='ButtomArea'
        onClick={props.CLICKBUTTOMCOMPONENT}
        id={props.IDBUTTOM}
      >
        <p className='AreaTextButtom'>{props.TEXTBUTTOMCOMPONENT}</p>
      </div>
  );
}

export default ButtomComponent;
 
































