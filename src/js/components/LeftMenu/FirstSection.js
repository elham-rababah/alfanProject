import React from "react";

export default class FirstSection extends React.Component {
  constructor() {
    super();
    this.state = {
      dataSliderValue:0,
      dataSliderMin:0,
      dataSliderMax:5000000,
      dataSliderStep:100000,

    } 
  }
  componentDidMount(){
    var slider = new Slider('#socialFollwersSlider', {});
    let currentComponent = this;
    slider.on("slide", function(sliderValue) {
      currentComponent.setState({dataSliderValue: sliderValue[1]});
  });

  }
  //

  render() {
    return (
      <div >
        Total Social Follwers: <br/> 
         <div>
        </div>
        <br/>
        <input 
          id="socialFollwersSlider"
          data-slider-id='dataSliderId'
          type="text" 
          class="span2" 
          value={this.state.dataSliderValue} 
          data-slider-min={this.state.dataSliderMin} 
          data-slider-max={this.state.dataSliderMax} 
          data-slider-step={this.state.dataSliderStep} 
          data-slider-value="[222,0]"
          /> 
      </div>
    );
  }
}