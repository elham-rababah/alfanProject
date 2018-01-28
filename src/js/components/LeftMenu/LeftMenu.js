import React from "react";

import AudienceGenderSection from "./AudienceGenderSection";
import SocialFollwersSection from "./SocialFollwersSection";
import VerticalSection from "./VerticalSection";


export default class LeftMenu extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div class="divLeft">
        <h3>General Search Criteria </h3>
        <SocialFollwersSection/>
        <VerticalSection/>
        <AudienceGenderSection/>
      </div>
    );
  }
}