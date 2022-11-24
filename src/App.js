import "./styles.css";
// import create from "zustand";
import { useStore } from "../Store";

export default function App() {
  const getVotes = useStore((state) => state.votes);
  const addVote = useStore((state) => state.addVote);
  const subtractVotes = useStore((state) => state.subtractVote);
  return (
    <div className="App">
      <h1>Total Votes</h1>
      <h2>{getVotes}</h2>
      <button onClick={addVote}>Add</button>
      <button onClick={subtractVotes}>Subtract</button>
    </div>
  );
}
