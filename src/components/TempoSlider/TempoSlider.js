import React from "react";
import { Grid, Typography, Slider, Input } from "@material-ui/core";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import "./TempoSlider.css";

/*droppable field location */
const TempoSlider = ({ tempo, handleChange }) => {
  const handleSliderChange = (event, newValue) => {
    handleChange(newValue);
  };

  const handleInputChange = (event) => {
    handleChange(event.target.value === "" ? "" : Number(event.target.value));
  };

  return (
    <div>
      <Typography id="input-slider" gutterBottom>
        Tempo
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <MusicNoteIcon />
        </Grid>
        <Grid item xs>
          <Slider
            value={typeof tempo === "number" ? tempo : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            max={250}
            min={0}
          />
        </Grid>
        <Grid item>
          <Input
            value={tempo}
            margin="dense"
            onChange={handleInputChange}
            inputProps={{
              step: 1,
              min: 0,
              max: 250,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default TempoSlider;
