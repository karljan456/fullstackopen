import { useState } from "react";

const App = () => {

  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  // Getting next random index for the next anecdote
  const nextAnecdote = Math.floor(Math.random() * anecdotes.length);

  // Initialising state for the vote array 
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

  // Finding index of populat anecdote
  const maxVotes = votes.indexOf(Math.max(...votes));

  // Increasing count value for current anecdote
  const increaseVoteCount = (index) => {
    setVotes((previosCount) => {
      const updatedCount = [...previosCount];
      updatedCount[index] += 1;
      return updatedCount;
    });
  };

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <div>
        <Button
          onClick={() => setSelected(nextAnecdote)}
          text="next anecdote"
        />
        <Button
          onClick={() => {
            increaseVoteCount(selected);
          }}
          text="vote"
        />
      </div>
      <h2>Anecdote with the most votes</h2>
      {anecdotes[maxVotes]}
      <p>has {votes[maxVotes]} votes</p>
    </div>
  );
};
const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};
export default App;
