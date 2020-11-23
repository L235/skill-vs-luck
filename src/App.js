import logo from "./logo.svg";
import "./App.css";
import { Header } from "semantic-ui-react";
import FieldInput from "./components/FieldInput/FieldInput";

function App() {
  return (
    <div>
      <Header as="h1">Sound Delay</Header>
      <FieldInput />
    </div>
  );
}

export default App;
