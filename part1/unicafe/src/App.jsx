import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // saving calculations data into variables
  const allScores = good + neutral + bad;
  const average = (good + neutral * 0 + bad * -1) / allScores;
  const positiveScore = (good / allScores) * 100;

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <Button onClick={() => setGood(good + 1)} text="good" />
        <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button onClick={() => setBad(bad + 1)} text="bad" />
      </div>
      <h1>statistics</h1>
      <table>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          allScores={allScores}
          average={average}
          positiveScore={positiveScore}
        />
      </table>
    </div>
  );
};

const Statistics = (props) => {
  // Checking if there is some data to display  
  if (props.allScores === 0) {
    return (
      <tbody>
        <tr>
          <td>No feedback given</td>
        </tr>
      </tbody>
    );
  }
  return (
    <tbody>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="all" value={props.allScores} />
      <StatisticLine text="average" value={props.average} />
      <StatisticLine text="positive" value={props.positiveScore + " %"} />
    </tbody>
  );
};
// Statistics row data 
const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};
// Button component 
const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default App;
