import React from "react";


export default class Card extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div class="w3-container">
        <div class="w3-card-4" style={{width:'70%'}}>
          <div class="w3-container">
            <img src={this.props.card.url} alt="Avatar" class="w3-left w3-Rounded w3-margin-right" style={{width:'60px'}}/>
            {this.props.card.name} {this.props.card.verified ?"yes":"not"}<br/>
            {this.props.card.flage} | {this.props.card.country} | {this.props.card.type} <br/>
            {this.props.card.view} views| {this.props.card.subscriber} subscriber<br/>
            <br/>

          </div>
        </div>
      </div>
    );
  }
}