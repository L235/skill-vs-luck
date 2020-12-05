import React from "react";
import { Grid, Typography, Slider, Input } from "@material-ui/core";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import "./GenericSlider.css";

/*droppable field location */
const GenericSlider = ({ name, value, handleChange, min, max }) => {
  const handleSliderChange = (event, newValue) => {
    handleChange(newValue);
  };

  const handleInputChange = (event) => {
    handleChange(event.target.value === "" ? "" : Number(event.target.value));
  };

  return (
    <div>
      <Typography id="input-slider" gutterBottom>
        {name}
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <MusicNoteIcon />
        </Grid>
        <Grid item xs>
          <Slider
            value={typeof value === "number" ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            max={max}
            min={min}
          />
        </Grid>
        <Grid item>
          <Input
            value={value}
            margin="dense"
            onChange={handleInputChange}
            inputProps={{
              step: 1,
              min: { min },
              max: { max },
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default GenericSlider;
