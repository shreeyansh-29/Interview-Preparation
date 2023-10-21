import {Children} from "react";
import "./App.css";

function CustomSwitch({children, value}) {
  const cases = [];
  const defaults = [];
  Children.forEach(children, (e) => {
    if (e.type.name === "CustomCase") {
      if (typeof e.props.value === "function") {
        if (e.props.value(value)) {
          cases.push(e);
        }
      } else if (value === e.props.value) {
        cases.push(e);
      }
    } else if (e.type.name === "DefaultCase") {
      defaults.push(e);
    }
  });

  if (cases.length > 0) return cases;
  else return defaults;
}

function CustomCase({children}) {
  return <>{children}</>;
}

function DefaultCase({children}) {
  return <>{children}</>;
}

function App() {
  return (
    <>
      <CustomSwitch value="30">
        <CustomCase value={(e) => e > 10}>
          <div>Hello Welcome</div>
        </CustomCase>
        <CustomCase value="20">
          <div>Hello 20</div>
        </CustomCase>
        <CustomCase value="30">
          <div>Hello 30</div>
        </CustomCase>
        <CustomCase value="10">
          <div>Hello 10</div>
        </CustomCase>
        <DefaultCase>Hello 40</DefaultCase>
      </CustomSwitch>
    </>
  );
}

export default App;
