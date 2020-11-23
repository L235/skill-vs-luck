import React from "react";
import "./Marcher.css";
import Emoji from "../Emoji/Emoji.js";

const Marcher = ({ drum, horn, dm }) => {
  return (
    <div>
      {drum && <Emoji symbol="🥁" />}
      {horn && <Emoji symbol="🎺" />}
      {dm && <Emoji symbol="🙌" />}
    </div>
  );
};

export default Marcher;
