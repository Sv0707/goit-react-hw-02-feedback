import React, { Component } from "react";
import "./App.css";
import Statistics from "../Statistics/Statistics";
import Section from "../Section/Section";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Notification from "../Notification/Notification";


class App extends Component {
    state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  
    feedbackIncrement = (name) => {
      this.setState((prevState) => {
        return { [name]: prevState[name] + 1 };
      });
    };
  
    countTotalFeedback = () => {
      const { good, neutral, bad } = this.state;
      return good + neutral + bad;
    };
  
    countPositiveFeedbackPercentage = () => {
      const { good } = this.state;
      const total = this.countTotalFeedback();
      const positivePercentage = Math.round((good / total) * 100) + "%";
      return positivePercentage;
    };
  
    render() {
      const { good, neutral, bad } = this.state;
      const total = this.countTotalFeedback();
      const positivePercentage = this.countPositiveFeedbackPercentage();
      return (
          <div>
        <Section title="Please leave the feedback">
          <FeedbackOptions options={[ "good", "neutral", "bad" ]} onLeaveFeedback={this.feedbackIncrement} />
          
          </Section> 
          <Section title="Statistics">
          {total > 0 ? <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} /> : <Notification message="There is no feedback" />}
          </Section>
          </div>
        
      );
    }
  }

export default App;
