import { Component } from 'react';
import { List } from './FeedbackOptions.styled';

export class FeedbackOptions extends Component {
  render() {
    const { changeFeedBack } = this.props;
    return (
      <List>
        <li>
          <button name="good" onClick={changeFeedBack}>
            Good
          </button>
        </li>
        <li>
          <button name="neutral" onClick={changeFeedBack}>
            Neutral
          </button>
        </li>
        <li>
          <button name="bad" onClick={changeFeedBack}>
            Bad
          </button>
        </li>
      </List>
    );
  }
}
