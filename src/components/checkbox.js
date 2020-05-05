import React, { Component } from "react";
import Like from "./like";

class Checkbox extends Component {
  state = {
    isChecked: false,
  };

  onChange = () => {
    this.setState({ isChecked: !this.state.isChecked });
  };
  render() {
    return (
        
      <div>
          <Like></Like>
        <label>
          <input
            type="checkbox"
            checked={this.state.checked}
            onChange={this.onChange}
          />
          {this.state.isChecked
            ? this.props.labelActive
            : this.props.labelInactive}
        </label>
      </div>
    );
  }
}

export default Checkbox;