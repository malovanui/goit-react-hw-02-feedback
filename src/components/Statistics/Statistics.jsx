import { Component } from 'react';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, countTotal, countPercent } = this.props;
    return (
      <div>
        <h2>Statistics</h2>
        <ul>
          <li>
            <p>Good: {good}</p>
          </li>
          <li>
            <p>Neutral: {neutral}</p>
          </li>
          <li>
            <p>Bad: {bad}</p>
          </li>
          <li>
            <p>
              Total: <span>{countTotal > 0 && countTotal}</span>
            </p>
          </li>
          <li>
            <p>Positive feedback: {countTotal > 0 && countPercent}</p>
          </li>
        </ul>
      </div>
    );
  }
}
