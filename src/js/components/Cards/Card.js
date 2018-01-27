import React from "react";


export default class Card extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log("Card",this.props.card);
    return (
      <div class="w3-container">
        <div class="w3-card-4" style={{width:'70%'}}>
          <div class="w3-container">
            <img src={this.props.card.url} alt="Avatar" class="w3-left w3-circle w3-margin-right" style={{width:'60px'}}/>
            {this.props.card.name} {this.props.card.verified}<br/>
            {this.props.card.flage} | {this.props.card.country} | {this.props.card.name} <br/>
             {this.props.card.view} views| {this.props.card.subscriber} subscriber<br/>
            hgghf<br/>

          </div>
        </div>
      </div>
    );
  }
}