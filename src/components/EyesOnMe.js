import React, { Component } from 'react';

export default class EyesOnMe extends Component {

  onFocusMessage = () => {
    console.log("Good!");
  }

  onBlurMessage = () => {
    console.log("Hey! Eyes on me!");
  }

  render() {

    return (
      <button
        onFocus={this.onFocusMessage}
        onBlur={this.onBlurMessage}>
      </button>
    )
  }

}
