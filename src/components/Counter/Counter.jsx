import * as React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        Currently clicked {this.state.count}
        <div>
          <button
            onClick={() => {
              this.setState(() => ({ count: this.state.count + 1 }));
            }}
          >
            Click me!
          </button>
        </div>
      </div>
    );
  }
}
