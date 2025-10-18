import React, { useState } from "react";

function Collapse({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-header">
        <span>{title}</span>
        <img
          src="/Vector.svg"
          alt="icône flèche"
          className={`icon ${isOpen ? "rotated" : ""}`}
          onClick={handleClick}
        />
      </div>
      <div className={`collapse-content ${isOpen ? "open" : ""}`}>
        <div className="collapse-text">{text}</div>
      </div>
    </div>
  );
}

export default Collapse;
