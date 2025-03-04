import { useState, useEffect } from "react";

const TypingEffect = ({ typingSpeed = 100, eraseSpeed = 50, delay = 1500 }) => {
  const texts = ['i love frontend development', 'i recently started backend', 'hoping to be a full stack dev'];
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    if (isDeleting) {
      if (displayText.length > 0) {
        setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, eraseSpeed);
      } else {
        setIsDeleting(false);
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    } else {
      if (displayText.length < currentText.length) {
        setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        setTimeout(() => setIsDeleting(true), delay);
      }
    }
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, eraseSpeed, delay]);

  return (
    <div className="min-h-screen flex items-center bg-blue-950 justify-center">
        <span className=" text-4xl  text-white font-semibold">{displayText}|</span>
    </div>
  );
};

export default TypingEffect;