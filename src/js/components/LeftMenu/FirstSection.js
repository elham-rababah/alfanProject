import React from "react";

export default class FirstSection extends React.Component {
  constructor() {
    super();
    this.state = {
      value:0,
      dataSliderMin:0,
      dataSliderMax:5000000,
      dataSliderStep:100000,
      dataSliderValue: "[0,1000000]"


    } 
  }
  componentDidMount(){
    var slider = new Slider('#socialFollwersSlider', {});
    let currentComponent = this;
    
    slider.on("slide", function(sliderValue) {
      if (sliderValue[1] == 5000000) {
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
        Total Social Follwers: <br/> 
         <div>
        </div>
        <br/>
        <input 
          id="socialFollwersSlider"
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