import React from "react";
import "./DisplayResults.css";
import Typography from "@material-ui/core/Typography";

const SPEED_OF_SOUND = 343; // m/s
const YARDS_PER_METER = 1.09361;
const SPEED_OF_SOUND_YARDS = SPEED_OF_SOUND * YARDS_PER_METER; // yds/s
const SECONDS_PER_MIN = 60;

const diagOfRectPrism = (a, b, c) => Math.sqrt(a ** 2 + b ** 2 + c ** 2);

const distToBox = (marchX, marchY, boxY, boxZ) => {
  const delY = Math.abs(marchY) + Math.abs(boxY);
  return diagOfRectPrism(marchX, delY, boxZ);
};

const findClosest = (goal, options) => {
  return options.reduce(function (prev, curr) {
    return Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev;
  });
};

const DisplayResults = ({ drumX, drumY, hornX, hornY, boxY, boxZ, tempo }) => {
  const drums_to_box = distToBox(drumX, drumY, boxY, boxZ);
  const horns_to_box = distToBox(hornX, hornY, boxY, boxZ);

  const discrepancy_in_seconds =
    Math.abs(drums_to_box - horns_to_box) / SPEED_OF_SOUND_YARDS;

  // calculate difference as a % of beat
  const seconds_per_beat = SECONDS_PER_MIN / tempo;
  const discrepancy_percentage_of_beat =
    discrepancy_in_seconds / seconds_per_beat;

  // round that to nearest 1/2^n of a beat and display to user
  const options = [0.5, 0.25, 0.125, 0.0625, 0.03125, 0.015625];
  const closest = findClosest(discrepancy_percentage_of_beat, options);
  const notes = {
    0.5: "half",
    0.25: "quarter",
    0.125: "eighth",
    0.0625: "sixteenth",
    0.03125: "thirty-second",
    0.015625: "sixty-fourth",
  };

  let adjustment = "";
  if (discrepancy_percentage_of_beat > 0.5) {
    adjustment = "greater than a half note";
  } else if (discrepancy_percentage_of_beat < 0.015625) {
    adjustment = "less than a sixth-fourth note";
  } else {
    adjustment = notes[closest];
  }

  const ahead_or_behind = drums_to_box < horns_to_box ? "ahead" : "behind";

  return (
    <div id="results-container">
      <Typography variant="p">
        Discrepancy in seconds:{" "}
        <span class="code">{discrepancy_in_seconds.toFixed(4)}</span>
      </Typography>
      <br />
      <Typography variant="p">
        Discrepancy as a percentage of the beat:{" "}
        <span class="code">
          {(discrepancy_percentage_of_beat * 100).toFixed(0)}%
        </span>
      </Typography>
      <br />
      <Typography variant="p">
        Adjustment needed: <br />
        <span class="code">
          {adjustment} note {ahead_or_behind}
        </span>{" "}
        of the drums to make the hornline match
      </Typography>
    </div>
  );
};

export default DisplayResults;
