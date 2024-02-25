import React, { useState, useEffect } from "react";
import './Wish.css';

export default function TypingEffect(props) {
  // const [typing, setTyping] = useState("");
  // const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const fullText =
    "Welcome to our blog! We're thrilled to have you here. Get ready for exciting insights, helpful tips, and inspiring stories. Let's embark on this journey together!";

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
