// File: public/utils/TypewriterText.jsx
import { useState, useEffect } from 'react';

const TypewriterText = ({ 
  words = ['Developer', 'Designer', 'Creator'],
  typeSpeed = 150,
  deleteSpeed = 100,
  pauseDuration = 1500,
  className = '',
  cursorClassName = 'animate-pulse',
  showCursor = true
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Type karna
        setCurrentText(currentWord.substring(0, currentText.length + 1));
        
        if (currentText === currentWord) {
          // Word complete, delete karne ka wait
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        // Delete karna
        setCurrentText(currentWord.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);
    
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, typeSpeed, deleteSpeed, pauseDuration]);

  return (
    <span className={`relative ${className}`}>
      {currentText}
      {showCursor && <span className={cursorClassName}>|</span>}
    </span>
  );
};

export default TypewriterText;