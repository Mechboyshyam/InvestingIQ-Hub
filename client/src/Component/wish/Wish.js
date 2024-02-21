import React, { useState, useEffect } from "react";

export default function TypingEffect(props) {
  // const [typing, setTyping] = useState("");
  // const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const fullText =
  "Welcome to our learning platform...😍";

useEffect(() => {
  let currentText = "";
  let currentIndex = 0;

  const interval = setInterval(() => {
    currentText += fullText[currentIndex];
    setText(currentText);
    currentIndex++;

    if (currentIndex === fullText.length) {
      clearInterval(interval);
    }
  }, 100);

  return () => {
    clearInterval(interval);
  };
}, []);

  return (
    <div className="mt-3 text-center">
      <p>{text}</p>
    </div>
  );
};
