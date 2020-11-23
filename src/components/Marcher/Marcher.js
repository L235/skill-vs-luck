import React from "react";
import "./Marcher.css";
import Emoji from "../Emoji/Emoji.js";

const Marcher = ({ drum, horn }) => {
  return (
    <div>
      {drum && <Emoji symbol="🥁" />}
      {horn && <Emoji symbol="🎺" />}
    </div>
  );
};

export default Marcher;
