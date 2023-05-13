import React, { useState, useCallback, useEffect } from 'react';
import FeedbackButtons from './components/FeedbackButtons/FeedbackButtons';
import FeedbackStatistics from 'components/FeedbackStaistics/FeedbackStaistics';
import NoFeedback from 'components/NoFeedback/NoFeedback';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  const addFeedback = useCallback(e => {
    const { id } = e.target;

    switch (id) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        throw new Error(`This field type is not processed!: ${id}`);
    }
  }, []);

  useEffect(() => {
    setTotal(good + neutral + bad);
  }, [good, neutral, bad]);

  useEffect(() => {
    setPositivePercentage(Math.round((good / total) * 100));
  }, [good, total]);

  return (
    <>
      <FeedbackButtons
        categories={['good', 'neutral', 'bad']}
        newFeedback={addFeedback}
      />
      {total !== 0 ? (
        <FeedbackStatistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          per={positivePercentage}
        />
      ) : (
        <NoFeedback message="There is no feedback" />
      )}
    </>
  );
}
