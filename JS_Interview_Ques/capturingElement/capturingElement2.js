import React, {useState, useRef, useEffect} from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0";

const useOnScreen = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false);

  let observer = new IntersectionObserver(
    ([entry]) => {
      setIntersecting(entry.isIntersecting);
    },
    {
      threshold: 1.0,
    }
  );

  useEffect(() => {
    observer.observe(ref.current);

    () => observer.unObserve();
  }, []);

  return isIntersecting;
};

const Element = ({index}) => {
  const ref = useRef();
  const isInViewPort = useOnScreen(ref);
  if (isInViewPort) {
    console.log(ref);
  }
  return (
    <div ref={ref} className="block">
      {index}
    </div>
  );
};

const App = () => {
  const blocks = [];
  for (let i = 0; i < 20; i = i + 1) {
    blocks.push(<Element index={i + 1} />);
  }
  return <div className="wrapper">{blocks}</div>;
};

ReactDOM.render(<App />, document.getElementById("root"));
