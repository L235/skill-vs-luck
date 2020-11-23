import React, { useState } from "react";
import "./FieldInput.css";
import Draggable from "react-draggable";
import { useForm } from "react-hook-form";
import { TextField } from "@material-ui/core";
import Marcher from "../Marcher/Marcher";
import TempoSlider from "../TempoSlider/TempoSlider";
import drill_chart from "../../assets/drill_chart.png";
/** will compose draggable marchers onto the droppable field component
 *
 */
const FieldInput = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  // location variables
  const [drumX, setDrumX] = useState(0);
  const [drumY, setDrumY] = useState(0);

  const [hornX, setHornX] = useState(0);
  const [hornY, setHornY] = useState(108);

  const [boxY, setBoxY] = useState(5);
  const [boxZ, setBoxZ] = useState(5);

  // tempo
  const [tempo, setTempo] = useState(160);

  /* handle input events */
  const handleDragDrum = (e, ui) => {
    setDrumX(drumX + ui.deltaX);
    setDrumY(drumY + ui.deltaY);
  };

  const handleDragHorn = (e, ui) => {
    setHornX(hornX + ui.deltaX);
    setHornY(hornY + ui.deltaY);
  };

  return (
    <div>
      <div
        style={{
          height: "320px",
          width: "600px",
          position: "relative",
          overflow: "hidden",
          border: "1px solid black",
          backgroundImage: `url(${drill_chart})`,
          backgroundSize: "contain",
        }}
      >
        <Draggable
          bounds="parent"
          onDrag={handleDragDrum}
          defaultPosition={{ x: 285, y: 290 }}
        >
          <div className="drag-box">
            <Marcher drum />
          </div>
        </Draggable>
        <Draggable
          bounds="parent"
          onDrag={handleDragHorn}
          defaultPosition={{ x: 285, y: 150 }}
        >
          <div className="drag-box">
            <Marcher horn />
          </div>
        </Draggable>
      </div>
      <div id="dm">
        <Marcher dm />
      </div>

      <p>
        Drum Position: ( {drumX}, {drumY} ) Horn Position: ( {hornX}, {hornY} )
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="boxY"
          label="Box to F.Sideline (yards)"
          type="number"
          variant="outlined"
          ref={register}
        />
        <br />
        <TextField
          id="boxZ"
          label="Box Height (yards)"
          type="number"
          variant="outlined"
          ref={register}
        />

        <br />
        <TempoSlider tempo={tempo} handleChange={setTempo} />
      </form>
    </div>
  );
};

export default FieldInput;
