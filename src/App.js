import React, { useState } from "react";
import "./App.css";
import { TextField, Typography } from "@material-ui/core";
import TempoSlider from "./components/TempoSlider/TempoSlider";
import FieldInput from "./components/FieldInput/FieldInput";
import DisplayResults from "./components/DisplayResults/DisplayResults";

function App() {
  // location variables - all in yards
  const [drumX, setDrumX] = useState(0);
  const [drumY, setDrumY] = useState(0);

  const [hornX, setHornX] = useState(0);
  const [hornY, setHornY] = useState(18);

  const [boxY, setBoxY] = useState(5);
  const [boxZ, setBoxZ] = useState(5);

  // tempo
  const [tempo, setTempo] = useState(160);

  return (
    <div className="app-container">
      <div id="header">
        <Typography variant="h4">Sound Delay Demo</Typography>
        <DisplayResults
          drumX={drumX}
          drumY={drumY}
          hornX={hornX}
          hornY={hornY}
          boxY={boxY}
          boxZ={boxZ}
          tempo={tempo}
        />
      </div>

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
