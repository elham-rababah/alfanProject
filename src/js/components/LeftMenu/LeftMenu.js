import React from "react";
import ChannelTypeSection from "./ChannelTypeSection";
import YoutubeCrateriaSection from "./YoutubeCrateriaSection";
import FirstSection from "./FirstSection";
import VerticalSection from "./VerticalSection";
import PostTimeSection from "./PostTimeSection";
import CreatorGenderSection from "./CreatorGenderSection";
import ViewTimeSection from "./ViewTimeSection";


export default class LeftMenu extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div class="divLeft">
        <h3>General Search Criteria </h3>
        <FirstSection/>
        <VerticalSection/>
        <ChannelTypeSection/>
        <CreatorGenderSection/>
        <PostTimeSection/>
        <YoutubeCrateriaSection/>
        <ViewTimeSection/>
        
        
         

      </div>
    );
  }
}