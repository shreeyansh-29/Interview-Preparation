// There are times when we want to detect if the user has clicked outside the component or not.
// Let us see how can we create the useOnClickOutside() hook in React that will help us to detect it.

import {useRef} from "react";
import useOnClickOutside from "./useOnClickOutside";

// useOnClickOutside(ref, callback) will accept the component/element reference and the callback function
// and will invoke the callback function if clicked outside the reference.

const App = () => {
  const ref = useRef();

  useOnClickOutside(ref, () => {
    console.log("Clicked");
  });

  return (
    <div>
      <p>Outside Click me!</p>
      <p ref={ref}>Click me!</p>
    </div>
  );
};

export default App;
