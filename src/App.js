import "./App.css";
import { increment, decrement, reset } from "./features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const count = useSelector((store) => store.counter.value);
  console.log(count);
  return (
    <main>
      <h1>Counter</h1>
      <div className="content">
        <button onClick={() => dispatch(decrement())}>-</button>
        <p>{count}</p>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <div className="reset">
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </main>
  );
}

export default App;
