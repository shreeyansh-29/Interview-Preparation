import "./App.css";
import {FeatureFlagProvider, FeatureFlag} from "./context/featureFlag";
import {useContext} from "react";

function Example() {
  return (
    <>
      <Feature feature="isGooglePlayEnabled">Google</Feature>
      <Feature feature="isApplePlayEnabled">Apple</Feature>
    </>
  );
}

function Feature({feature, children}) {
  let {features} = useContext(FeatureFlag);
  return features[feature] ? children : null;
}

function App() {
  return (
    <FeatureFlagProvider>
      <Example />
    </FeatureFlagProvider>
  );
}

export default App;
