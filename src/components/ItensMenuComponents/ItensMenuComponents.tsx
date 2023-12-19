import React from "react";
import "./ItensMenuComponents.css";
import { Link } from "react-router-dom";

function ItensMenuComponents(props: any) {
  return (
    <Link to={`${props.LINKANCOR}`} className="ItemMenuLeft">
      <div className="IconMenuLeft">{props.ICONEMENU}</div>
      <p className="TextMenuIcon">{props.TEXTITEMMENU}</p>
    </Link>
  );
}

export default ItensMenuComponents;
