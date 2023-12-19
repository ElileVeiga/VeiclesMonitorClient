import React from 'react';
import './ButtomLoginComponent.css';

function ButtomLoginComponent(props:any) {
  return (
    <div
    className='BodyButtom'
    onClick={props.BUTTOMBODY}
    >
        {props.TEXTBUTTOM}
    </div>
  );
}

export default ButtomLoginComponent;
 
































