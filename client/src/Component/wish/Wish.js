import React, { useState, useEffect } from "react";
import './Wish.css';

export default function TypingEffect(props) {
  // const [typing, setTyping] = useState("");
  // const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const fullText =
    "Welcome to our blog! It's a pleasure to have you here. Await fascinating revelations, practical advice, and motivational tales. Together, let's go off on this adventure!   ";

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
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="mt-3 text-center text-color">
      <p>{text}</p>
    </div>
  );
}
