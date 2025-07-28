'use client';

import { useEffect, useState } from 'react';

const text = 'I am a passionate fullstack developer';

export default function AutoTyping() {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const delayAfterTyping = 1500;

    const handleTyping = () => {
      if (!isDeleting && index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      } else if (isDeleting && index > 0) {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      } else if (!isDeleting && index === text.length) {
        setTimeout(() => setIsDeleting(true), delayAfterTyping);
      } else if (isDeleting && index === 0) {
        setIsDeleting(false);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [index, isDeleting]);

  return (
    <h1 className="text-gray-300 max-w-[300px] md:max-w-[500px] whitespace-nowrap md:text-2xl text-lg mb-6 transform -translate-x-2">
      {displayedText}|
    </h1>
  );
}
