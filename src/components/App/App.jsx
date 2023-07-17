import React, { useState } from "react";
import Statistics from "../Statistics/Statistics"
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions"
import Section from "../Section/Section"
import Notification from "../Notification/Notification";
import s from "./App.module.css"

export default function App () {
  const [good,setGood] = useState(0);
  const [neutral,setNeutral] = useState(0);
  const [bad,setBad] = useState(0);
  const feedback = [
    {
      response:'good',
      click: () => setGood(good => good + 1),
    },
    {
      response:'neutral',
      click: () => setNeutral(neutral => neutral + 1),
    },
    {
      response:'bad',
      click: () => setBad(bad => bad + 1),
    }
  ];
  function countTotalFeedback () {
    return good + neutral + bad;
  };
  function countPositiveFeedbackPercentage () {
    return (Math.round(good / countTotalFeedback() * 100));
  };
    return(
      <div className={s.con}>
          <Section>  
            <FeedbackOptions options={feedback}></FeedbackOptions>
            {!countTotalFeedback() ? (<Notification message='There is no feedback'/>) : (<Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()}></Statistics>) }
          </Section>
      </div>
    )
}
