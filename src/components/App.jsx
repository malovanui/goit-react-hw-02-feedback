import { Component } from 'react';
import { Section } from './Section/Section.jsx';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButton = evt => {
    const feedbackType = evt.target.name;
    // const sum = (this.state[feedbackType] += 1);
    this.setState(prevState => {
      //   [feedbackType]: sum,

      return (prevState[feedbackType] += 1);
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.state;
    const sum = good + neutral + bad;
    const percent = (good / sum) * 100;
    return `${percent.toFixed()}%`;
  }

  render() {
    return (
      <Section
        title="Pleace leave feedback"
        state={this.state}
        changeFeedBack={this.handleButton}
        countTotal={this.countTotalFeedback()}
        countPercent={this.countPositiveFeedbackPercentage()}
      ></Section>
    );
  }
}
