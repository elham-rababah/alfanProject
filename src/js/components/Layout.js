import React from "react";
import Heder from "./Heder/Heder";
import LeftMenu from "./LeftMenu/LeftMenu";
import Cards from "./Cards/Cards";

export default class Layout extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div class="gray">
      	<Heder/>
        <div>
          <LeftMenu/>
          <Cards/>
        </div>
      </div>
    );
  }
}