import "./App.css";
import {useState, useEffect} from "react";

function App() {
  const [count, setCount] = useState(60);

  useEffect(() => {
    const onscroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        window.document.body.offsetHeight - 30
      ) {
        setCount((prev) => prev + 60);
      }
    };

    window.addEventListener("scroll", onscroll);

    return () => {
      window.removeEventListener("scroll", onscroll);
    };
  }, [count]);

  const elements = [];
  for (let i = 0; i < count; i++) {
    elements.push(<div key={i}>{i + 1}</div>);
  }

  return <main>{elements}</main>;
}

export default App;
