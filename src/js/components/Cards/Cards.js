import React from "react";
import Card from "./Card";

export default class Cards extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log("Cards");
    var names = ['Jake', 'Jon', 'Thruster'];
    return (
    <div>
      {names.map(i => {
        return <Card/>
      })}
    </div>
  );
  }
}