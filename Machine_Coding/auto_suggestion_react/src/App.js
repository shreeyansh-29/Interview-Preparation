import {useRef, useState, useEffect} from "react";
import "./App.css";

// Mock Server
const FAILURE_COUNT = 10;
const LATENCY = 200;

function getRandomBool(n) {
  const threshold = 1000;
  if (n > threshold) n = threshold;
  return Math.floor(Math.random() * threshold) % n === 0;
}

function getSuggestions(text) {
  var pre = "pre";
  var post = "post";
  var results = [];
  if (getRandomBool(2)) {
    results.push(pre + text);
  }
  if (getRandomBool(2)) {
    results.push(text);
  }
  if (getRandomBool(2)) {
    results.push(text + post);
  }
  if (getRandomBool(2)) {
    results.push(pre + text + post);
  }
  return new Promise((resolve, reject) => {
    const randomTimeout = Math.random() * LATENCY;
    setTimeout(() => {
      if (getRandomBool(FAILURE_COUNT)) {
        reject();
      } else {
        resolve(results);
      }
    }, randomTimeout);
  });
}

const App = () => {
  const inputRef = useRef();
  const suggestionAreaRef = useRef();
  const [searchQuery, setSearchQuery] = useState("");
  const [list, updateList] = useState([]);
  const [suggestionAreaVisible, setSuggestionAreaVisiblity] = useState(false);

  const handleChange = (e) => {
    const {value} = e.target;
    setSearchQuery(value);
    makeApiCall(value);
  };

  const makeApiCall = async (query) => {
    try {
      let resp = await getSuggestions(query);
      updateList(resp);
    } catch (e) {
      updateList([]);
      console.error("Error while getting suggestons list ", e);
    }
  };

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (
        e.target !== inputRef.current &&
        e.target !== suggestionAreaRef.current
      ) {
        setSuggestionAreaVisiblity(false);
      }
    });

    return () => {
      window.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <main className="App">
      <input
        type="text"
        name="search"
        placeholder="search"
        id="search"
        onFocus={() => setSuggestionAreaVisiblity(true)}
        onChange={handleChange}
        value={searchQuery}
        ref={inputRef}
      />
      {suggestionAreaVisible && (
        <div id="suggestion-area" ref={suggestionAreaRef}>
          {list.map((e) => (
            <div
              key={e.toString()}
              style={{cursor: "pointer", margin: "3px 0"}}
              onClick={() => setSearchQuery(e)}
            >
              {e}
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default App;
