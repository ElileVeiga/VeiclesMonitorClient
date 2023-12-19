import React from "react";
import "./DataSetComponent.css";

function DataSetComponent(props: any) {
  return (
    <div className="BoxDataComponent">
      <label>{props.TITLE}</label>
      <input 
        type="date"
        id={props.IDDATECOMPONENT}
        onChange={props.CHANGEDATE}
      />
    </div>
  );
}

export default DataSetComponent;
