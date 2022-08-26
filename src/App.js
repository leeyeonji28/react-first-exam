import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [searchWord, serSearchWord] = useState("");
  const inputChange = (e) => {
    serSearchWord(e.target.value);
  };
  useEffect(() => {
    console.log("API");
  }, []);
  useEffect(() => {
    console.log("counter");
  }, [counter]);
  useEffect(() => {
    console.log("searchWord");
  }, [searchWord]);

  return (
    <div className="m-4">
      <div>
        <h1>검색어를 입력해주세요.</h1>
        <input
          type="text"
          className="border-black border"
          onChange={inputChange}
        />
      </div>

      <div>
        <h1>카운터</h1>
        <p>{counter}번 입력했습니다.</p>
        <button
          className="btn"
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          Click :)
        </button>
      </div>
    </div>
  );
}

export default App;
