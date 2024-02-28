import React, { useState, useEffect, useMemo } from 'react';

const TypingParagraph = () => {
    const [textIndex, setTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');

    const texts = useMemo(() => ["graphic designer", "software engineer", "web developer"], []);

    useEffect(() => {
        const interval = setInterval(() => {
            setDisplayText(texts[textIndex].substring(0, displayText.length + 1));

            if (displayText === texts[textIndex]) {
                setTimeout(() => {
                    setDisplayText('');
                    setTextIndex((textIndex + 1) % texts.length);
                }, 2000); // Delay before clearing text and moving to the next one
            }
        }, 100); // Typing speed

        return () => clearInterval(interval);
    }, [displayText, textIndex, texts]);

    return (
        <p className="text-lg text-center">{`I am a ${displayText}`}</p>
    );
};

export default TypingParagraph;
