import React, { useState } from "react";
import "./App.css";
import { Header } from "semantic-ui-react";
import { TextField } from "@material-ui/core";
import TempoSlider from "./components/TempoSlider/TempoSlider";
import FieldInput from "./components/FieldInput/FieldInput";

function App() {
  // location variables
  const [drumX, setDrumX] = useState(0);
  const [drumY, setDrumY] = useState(0);

  const [hornX, setHornX] = useState(0);
  const [hornY, setHornY] = useState(108);

  const [boxY, setBoxY] = useState(5);
  const [boxZ, setBoxZ] = useState(5);

  // tempo
  const [tempo, setTempo] = useState(160);

  return (
    <div className="app-container">
      <Header as="h1">Sound Delay</Header>

      <FieldInput
        drumX={drumX}
        setDrumX={setDrumX}
        drumY={drumY}
        setDrumY={setDrumY}
        hornX={hornX}
        setHornX={setHornX}
        hornY={hornY}
        setHornY={setHornY}
      />

      <form>
        <div className="number-inputs">
          <TextField
            id="boxY"
            label="Box to F.Sideline (yards)"
            type="number"
            variant="outlined"
            value={boxY}
            onChange={setBoxY}
          />
          {/* </div> */}
          {/* <div className="number-input"> */}
          <TextField
            id="boxZ"
            label="Box Height (yards)"
            type="number"
            variant="outlined"
            value={boxZ}
            onChange={setBoxZ}
          />
        </div>

        <br />
        <TempoSlider tempo={tempo} handleChange={setTempo} />
      </form>
    </div>
  );
}

export default App;
