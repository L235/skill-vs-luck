import React, { useEffect, useState } from "react";
import { Grid, Typography, Slider, Input } from "@material-ui/core";
import "./GenericSlider.css";

/*droppable field location */
const GenericSlider = ({ name, initValue, handleChange, min, max, icon }) => {
  const [value, setValue] = useState(initValue);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      handleChange(value);
    }, 500);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [value, handleChange]);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  return (
    <div>
      <Typography id="input-slider" gutterBottom>
        {name}
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>{icon}</Grid>
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
