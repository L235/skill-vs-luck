import React, { useState } from "react";
import "./App.css";
import { Typography } from "@material-ui/core";
import ShowResults from "./components/ShowResults";
import GenericSlider from "./components/GenericSlider/GenericSlider";

function App() {
  const [numApplicants, setNumApplicants] = useState(20000);
  const [admitRate, setAdmitRate] = useState(5);
  const [luckRate, setLuckRate] = useState(20);

  return (
    <div className="app-container">
      <div id="header">
        <Typography variant="h4">
          How important is luck in admission decisions?
        </Typography>
      </div>

      <form>
        <br />
        <GenericSlider
          name="Number of applicants"
          value={numApplicants}
          handleChange={setNumApplicants}
          min={0}
          max={100000}
        />
        <GenericSlider
          name="Percentage accepted"
          value={admitRate}
          handleChange={setAdmitRate}
          min={0}
          max={100}
        />
        <GenericSlider
          name="Luck factor (percentage of decision based on luck)"
          value={luckRate}
          handleChange={setLuckRate}
          min={0}
          max={100}
        />
        <ShowResults
          numApplicants={numApplicants}
          numAccepted={(numApplicants * admitRate) / 100}
          luckImportance={luckRate / 100}
        />
      </form>

      <p>
        By Kevin Li,{" "}
        <a href="https://github.com/L235/skill-vs-luck">Repo on GitHub</a>.{" "}
        <br />
        Based on a design by{" "}
        <a href="https://github.com/hcussen">Hannah Cussen</a>.
      </p>
    </div>
  );
}

export default App;
