import { Component } from "react";

export default class Search extends Component {
  state = {
    search: "",
  };

  render() {
    return (
      <div className="input-field">
        <input
          className="validate"
          id="email_inline"
          type="search"
          placeholder="Search"
          value={this.state.search}
          onChange={(e) => this.setState({ search: e.target.value })}
        />
      </div>
    );
  }
}
