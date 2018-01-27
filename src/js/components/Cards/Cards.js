import React from "react";
import { Card, ImageHeader, CardBody, CardFooter } from "react-simple-card";


const App = () => (
  <div>
    <h2>React Simple Card basic layout with image header</h2>
    
  </div>
);




export default class Cards extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div class="w3-container">
  <h2>Card Example</h2>

  <div class="w3-card-4" style={{width:'70%'}}>
    <div class="w3-container">
      <img src="http://placehold.it/150x200/DC143C/FFFFFF" alt="Avatar" class="w3-left w3-circle w3-margin-right" style={{width:'60px'}}/>
      <p>CEO at Mighty Schools. Marketing and Advertising. Seeking a new job and new opportunities.</p><br/>
    </div>
  </div>
</div>
    );
  }
}