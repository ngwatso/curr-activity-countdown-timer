import "./styles.css";
import { CountDownTimer } from "./countDownTimer";
import { CurrentActivity } from "./currentActivity";

export default function App() {
  return (
    <div className="App">
      <CurrentActivity />
      <CountDownTimer />
    </div>
  );
}
