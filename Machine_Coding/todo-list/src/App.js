import React, {useRef, useState} from "react";
import "./styles.css";

function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      setTodos([
        ...todos,
        {
          text: e.target.value,
          completed: false,
          id: Date.now(),
        },
      ]);
      inputRef.current.value = "";
    }
  }

  function handleCompleted(id) {
    const updatedList = todos.map((e) => {
      if (e.id === id) {
        e.completed = !e.completed;
      }
      return e;
    });
    setTodos(updatedList);
  }
  function handleDeletedItem(id) {
    const filter = todos.filter((e) => e.id !== id);
    setTodos(filter);
  }

  function handleUpdatedText(id, value) {
    const updatedList = todos.map((e) => {
      if (e.id === id) {
        e.text = value;
      }
      return e;
    });
    setTodos(updatedList);
  }

  return (
    <div className="App">
      <input type="text" onKeyPress={handleKeyPress} ref={inputRef} />
      {todos.map((e) => (
        <Item
          {...e}
          key={e.id}
          updatedClick={handleCompleted}
          handleDeletedItem={handleDeletedItem}
          handleUpdate={handleUpdatedText}
        />
      ))}
    </div>
  );
}

export default App;

function Item({
  text,
  completed,
  id,
  updatedClick,
  handleDeletedItem,
  handleUpdate,
}) {
  const [edit, setEdit] = useState(false);
  const [update, setUpdate] = useState(text);

  return (
    <div className="item">
      <div className="circle" onClick={() => updatedClick(id)}>
        {completed ? <> &#10003; </> : null}
      </div>
      <div
        className={completed ? "strike" : ""}
        onDoubleClick={() => {
          if (!completed) setEdit(true);
        }}
      >
        {edit ? (
          <input
            type="text"
            value={update}
            onChange={(e) => {
              setUpdate(e.target.value);
            }}
            onBlur={() => {
              setEdit(false);
              handleUpdate(id, update);
            }}
          />
        ) : (
          text
        )}
      </div>
      <div className="close" onClick={() => handleDeletedItem(id)}>
        X
      </div>
    </div>
  );
}
