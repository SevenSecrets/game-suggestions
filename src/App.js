import React from 'react';
import Poll from './components/Poll'
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { pollCreated: false, pollTitle: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ pollTitle: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ pollCreated: true });
  }

  render() {
    return (
      <div className="App">
        {!this.state.pollCreated &&
          <form onSubmit={this.handleSubmit}>
            <h3>Create a Poll</h3>
            <label>
              Title:&nbsp;
              <input type="text" name="title" placeholder="Enter a poll title" onChange={this.handleChange} value={this.state.pollTitle} />
            </label>
            <input type="submit" value="Create" />
          </form>
        }
        {this.state.pollCreated &&
          <Poll title={this.state.pollTitle} />
        }
      </div>
    );
  }
}

export default App;
