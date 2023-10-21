import {useState} from "react";
import "./App.css";

function App(props) {
  const {coworkers} = props;
  const initialState = coworkers.reduce((a, b) => {
    const name = b.first_name + b.last_name;
    a[name] = true;
    return a;
  }, {});

  const [employeeStatus, setEmployeeStatus] = useState(initialState);

  const toggleStatus = (name) => {
    setEmployeeStatus({...employeeStatus, [name]: !employeeStatus[name]});
  };

  return coworkers.map(({first_name, last_name}) => {
    const name = first_name + last_name;

    return (
      <div
        key={name}
        onClick={() => toggleStatus(name)}
        style={{cursor: "pointer"}}
      >
        <p>
          Name: {first_name} {last_name}
        </p>
        <p>Status : {employeeStatus[name] ? "Online" : "Offline"}</p>
      </div>
    );
  });
}

App.defaultProps = {
  coworkers: [
    {first_name: "Yagami", last_name: "Light"},
    {first_name: "Saturo", last_name: "Gojo"},
    {first_name: "Shoyo", last_name: "Hinata"},
  ],
};

export default App;
