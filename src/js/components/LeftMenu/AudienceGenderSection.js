import React from "react";

export default class AudienceGenderSection extends React.Component {
  constructor() {
    super();
    this.state = {
      value:0,
      dataSliderMin:0,
      dataSliderMax:100,
      dataSliderStep:5,
      dataSliderValue: "[0,30]"


    } 
  }
  componentDidMount(){
    var slider = new Slider('#audiencegenderSlider', {});
    let currentComponent = this;
    
    slider.on("slide", function(sliderValue) {
      if (sliderValue[1] == 30) {
        currentComponent.setState({value: 0});
        currentComponent.setState({dataSliderValue: [0,0]});
      } else {
        currentComponent.setState({value: sliderValue[1]});
        currentComponent.setState({dataSliderValue:sliderValue});
      }
  });

  }
  //

  render() {
    return (
      <div >
        Audience Gender (last 30 days) <br/> 
        <div>
        </div>
        <br/>
        <input 
          id="audiencegenderSlider"
          data-slider-id='dataSliderId'
          type="text" 
          class="span2" 
          value={this.state.value} 
          data-slider-min={this.state.dataSliderMin} 
          data-slider-max={this.state.dataSliderMax} 
          data-slider-step={this.state.dataSliderStep} 
          data-slider-value={this.state.dataSliderValue}
          /> 
      </div>
    );
  }
}