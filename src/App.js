import { useState } from "react";
import Convert from "./Convert";
import Counter from "./Counter";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="">
      <Counter counter={counter} setCounter={setCounter} />
      <Convert counter={counter} setCounter={setCounter} />
    </div>
  );
}

export default App;
