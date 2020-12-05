import React, { useState } from "react";
import "./App.css";
import { Typography } from "@material-ui/core";
import ShowResults from "./components/ShowResults";
import GenericSlider from "./components/GenericSlider/GenericSlider";
import PersonIcon from "@material-ui/icons/Person";
import CheckIcon from "@material-ui/icons/Check";
import MusicNoteIcon from "@material-ui/icons/MusicNote";

function App() {
  const initNumApplicants = 50000;
  const initAdmitRate = 5;
  const initLuckRate = 5;

  const [numApplicants, setNumApplicants] = useState(initNumApplicants);
  const [admitRate, setAdmitRate] = useState(initAdmitRate);
  const [luckRate, setLuckRate] = useState(initLuckRate);

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
          initValue={initNumApplicants}
          handleChange={setNumApplicants}
          min={0}
          max={200000}
          icon={<PersonIcon />}
        />
        <GenericSlider
          name="Percentage accepted"
          initValue={initAdmitRate}
          handleChange={setAdmitRate}
          min={0}
          max={100}
          icon={<CheckIcon />}
        />
        <GenericSlider
          name="Luck factor (percentage of decision based on luck)"
          initValue={initLuckRate}
          handleChange={setLuckRate}
          min={0}
          max={100}
          icon={<MusicNoteIcon />}
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
