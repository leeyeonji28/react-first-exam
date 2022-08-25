import { useState } from "react";
import Convert from "./Convert";
import Counter from "./Counter";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="bg-red-500">
      <Counter counter={counter} setCounter={setCounter} />
      <Convert counter={counter} />
    </div>
  );
}

export default App;
