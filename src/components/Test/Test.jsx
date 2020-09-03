import React from "react";

export default class Test extends React.Component {
  render() {
    return (
      <div>
        Test.jsx is running
        <p>text: {this.props.text}</p>
      </div>
    );
  }
}
