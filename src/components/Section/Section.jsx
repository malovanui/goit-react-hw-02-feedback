import { SectionWrap } from './Section.styled';
import { Component } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export class Section extends Component {
  render() {
    const { changeFeedBack, countPercent, countTotal } = this.props;
    const { good, neutral, bad } = this.props.state;

    return (
      <SectionWrap>
        <h1>{this.props.title}</h1>
        <FeedbackOptions changeFeedBack={changeFeedBack}></FeedbackOptions>

        {good || neutral || bad ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            countTotal={countTotal}
            countPercent={countPercent}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </SectionWrap>
    );
  }
}
