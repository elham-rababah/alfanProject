import React from "react";

import AudienceGenderSection from "./AudienceGenderSection";
import SocialFollwersSection from "./SocialFollwersSection";
import VerticalSection from "./VerticalSection";

const items = `[
  {"id" : "1","value" : "Automotive"},
  {"id" : "2","value" : "Automotive2"},
  {"id" : "3","value" : "Automotive3"},
  {"id" : "4","value" : "Automotive4"},
  {"id" : "5","value" : "Automotive5"},
  {"id" : "6","value" : "Automotive6"},
  {"id" : "7","value" : "Automotive7"},
  {"id" : "8","value" : "Automotive8"}
]`;

export default class LeftMenu extends React.Component {
  constructor() {
    super();
  }

  render() {
    var item = JSON.parse(items);
    return (
      <div class="divLeft">
        <h3>General Search Criteria </h3>
        <SocialFollwersSection/>
        <VerticalSection items={items}/>
        <AudienceGenderSection/>
      </div>
    );
  }
}