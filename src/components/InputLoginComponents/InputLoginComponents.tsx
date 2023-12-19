import React from "react";
import "./InputLoginComponents.css";

function InputLoginComponents(props: any) {
  return (
    <div
        className="boxInputLogin"
    >
      <input
        type={props.TYPEINPUT}
        placeholder={props.PLACEHOLDERINPUT}
        id={props.IDINPUT}
        className="inputStyle"
        onChange={props.CHANGEINPUT}
        value={props.VALUE}
        autoComplete="on"
      />
    </div>
  );
}

export default InputLoginComponents;
