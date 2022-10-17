import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

function App() {
  const [count, setCount] = useState(0);

  return <div className="App">Hello world</div>;
}

export default App;
