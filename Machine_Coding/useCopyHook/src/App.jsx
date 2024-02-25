import useCopy from "./useCopy";

function App() {
  const [copiedText, copy] = useCopy();
  return (
    <button onClick={() => copy("Hello World!")}>
      "copiedText" : {copiedText}
    </button>
  );
}

export default App;

// Output:
// copiedText:  // initially
// copiedText: Hello World! // after click
