import React from "react";
import "./FieldInput.css";
import Draggable from "react-draggable";
import Marcher from "../Marcher/Marcher";
import drill_chart from "../../assets/drill_chart.png";
/** will compose draggable marchers onto the droppable field component
 *
 */
const FieldInput = ({
  drumX,
  setDrumX,
  drumY,
  setDrumY,
  hornX,
  setHornX,
  hornY,
  setHornY,
}) => {
  /* handle input events */
  const handleDragDrum = (e, ui) => {
    setDrumX(drumX + ui.deltaX / 6);
    setDrumY(drumY + ui.deltaY / 6);
  };

  const handleDragHorn = (e, ui) => {
    setHornX(hornX + ui.deltaX / 6);
    setHornY(hornY - ui.deltaY / 6);
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
        Drum Position: ({drumX.toFixed(0)}, {drumY.toFixed(0)}) Horn Position: (
        {hornX.toFixed(0)}, {hornY.toFixed(0)})
      </p>
    </div>
  );
};

export default FieldInput;
