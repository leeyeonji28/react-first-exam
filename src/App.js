import { useState } from "react";
import Convert from "./Convert";
import Counter from "./Counter";

function App() {
  const [minutes, setMinutes] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const onChange = (e) => {
    setMinutes(e.target.value);
  };
  const changeActive = () => {
    setDisabled(!disabled);
  };
  const reset = () => {
    setMinutes(0);
  };

  return (
    <div className="p-10">
      <div className="font-bold text-2xl">Time Converter</div>
      <div className="border border-pink-300 mb-3 mt-5">
        <div>Minutes</div>
        <input
          type="number"
          placeholder="Minutes"
          value={minutes}
          onChange={onChange}
          disabled={disabled}
        />
      </div>
      <div className="border border-blue-300 mb-5">
        <div>Hours</div>
        <input
          type="number"
          placeholder="Hours"
          value={Math.floor(minutes / 60)}
          onChange={() => {}}
          disabled={!disabled}
        />
      </div>
      <button onClick={changeActive} className="btn mr-3">
        active toggle
      </button>
      <button onClick={reset} className="btn w-36">
        reset
      </button>
    </div>
  );
}

export default App;
