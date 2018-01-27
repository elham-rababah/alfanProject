import React from "react";


const App = () => (
  <div>
    <h2>React Simple Card basic layout with image header</h2>
    
  </div>
);




export default class Card extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log("Card");
    return (
      <div class="w3-container">
        <div class="w3-card-4" style={{width:'70%'}}>
          <div class="w3-container">
            <img src="http://placehold.it/150x200/DC143C/FFFFFF" alt="Avatar" class="w3-left w3-circle w3-margin-right" style={{width:'60px'}}/>
                       hgghf<br/>
            hgghf<br/>
            hgghf<br/>
            hgghf<br/>

          </div>
        </div>
      </div>
    );
  }
}