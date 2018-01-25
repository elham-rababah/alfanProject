import React from "react";
import Heder from "./Heder/Heder";

export default class Layout extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
      	<Heder/>
        <h1>heeeer is Layout</h1>
      </div>
    );
  }
}