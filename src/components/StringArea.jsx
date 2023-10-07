import { useState } from "react";

const StringArea = ({ text, maxChar }) => {
  const [showFull, setShowFull] = useState(false);

  let shortText = text;
  if (text?.length > maxChar && !showFull) {
    shortText = text.slice(0, maxChar) + "  ...Daha Fazla";
  }

  return (
    <p onClick={() => setShowFull(!showFull)}>
      {shortText?.split("\n").map((descLine, i) => (
        <span key={i}>
          {descLine} <br />
        </span>
      ))}
    </p>
  );
};

export default StringArea;
