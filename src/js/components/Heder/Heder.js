import React from "react";

export default class Heder extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <nav class="navbar navbar-default white">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="#"><img src="../assets/alfanlogo.png" width="45" height="35" class="d-inline-block align-top" alt="alfanlogo"/></a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}