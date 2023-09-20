import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodFeedbackIncrementClick = evt => {
    console.log('evt', evt);
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  handleNeutralFeedbackIncrementClick = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  handleBadFeedbackIncrementClick = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <div>
          <h1>Please leave feedback</h1>
          <button onClick={this.handleGoodFeedbackIncrementClick}>Good</button>
          <button onClick={this.handleNeutralFeedbackIncrementClick}>
            Neutral
          </button>
          <button onClick={this.handleBadFeedbackIncrementClick}>Bad</button>
        </div>
        <div>
          <h1>Statistics</h1>
          <ul>
            <li>
              Good: <span>{this.state.good}</span>
            </li>
            <li>
              Neutral: <span>{this.state.neutral}</span>
            </li>
            <li>
              Bad: <span>{this.state.bad}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
