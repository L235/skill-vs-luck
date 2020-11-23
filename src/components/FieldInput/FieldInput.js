import React, { useState } from "react";
import "./FieldInput.css";
import Marcher from "../Marcher/Marcher";
import Draggable from "react-draggable";
/** will compose draggable marchers onto the droppable field component
 *
 */
const FieldInput = () => {
  const [drumX, setDrumX] = useState(0);
  const [drumY, setDrumY] = useState(0);
  const [hornX, setHornX] = useState(0);
  const [hornY, setHornY] = useState(0);

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
          height: "160px",
          width: "300px",
          position: "relative",
          overflow: "hidden",
          border: "1px solid black",
        }}
      >
        <Draggable bounds="parent" onDrag={handleDragDrum}>
          <div className="drag-box">
            <Marcher drum />
          </div>
        </Draggable>
        <Draggable bounds="parent" onDrag={handleDragHorn}>
          <div className="drag-box">
            <Marcher horn />
          </div>
        </Draggable>
      </div>

      <p>
        Drum Postion: ( {drumX}, {drumY} ) Horn Postion: ( {hornX}, {hornY} )
      </p>

      <p></p>
    </div>
  );
};

export default FieldInput;
