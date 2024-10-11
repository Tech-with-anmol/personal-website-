import { Input } from 'postcss';
import React, { useEffect, useRef, useState } from 'react';
import Terminal from 'react-terminal-ui';
import { ColorMode } from 'react-terminal-ui';
import { TerminalInput, TerminalOutput } from 'react-terminal-ui';
import ReactDOM from 'react-dom';
import { document } from 'postcss';

const TerminalComponent = () => {
    const [lineData, setLineData] = useState([
        <TerminalOutput key={0}>HI! this is under development.</TerminalOutput>,
        <TerminalOutput key={1}></TerminalOutput>,
        <TerminalOutput key={2}>Hint: Type help in terminal</TerminalOutput>,
    ]);
    
   

    useEffect(() => {
      
      const audioElement = new Audio('background.mp3');
    
      audioElement.loop = true;
    
      audioElement.play();
    
      // Unmute the audio element after a short delay
      
    }, []);
    
      
    
    
    function handleInput(input) {
        let ld = [...lineData];
        ld.push(<TerminalInput key={ld.length}>{input}</TerminalInput>);

        if (input.toLowerCase() === 'help') {
            ld.push(<TerminalOutput key={ld.length + 1}>Available commands: help, about, project</TerminalOutput>);
        } else if (input.toLowerCase() === 'about') {
            ld.push(
                <TerminalOutput key={ld.length + 1}>
                  Hey there 👋, I am Anmol, a 16-year-old tech enthusiast & self-taught programmer.
                </TerminalOutput>
              );
              ld.push(
                <TerminalOutput key={ld.length + 1}>
                  Computer is like home to me. I started learning programming at the age of 12,
                </TerminalOutput>
              );
              ld.push(
                <TerminalOutput key={ld.length + 1}>
                  and it&apos;s been a fantastic journey. Over the years, I have acquired skills like
                </TerminalOutput>
              );
              ld.push(
                <TerminalOutput key={ld.length + 1}>
                  game development, web development, and low-level programming.
                </TerminalOutput>
              );
              ld.push(
                <TerminalOutput key={ld.length + 1}>
                  I also love making pixel & vector art for my games.
                </TerminalOutput>
              );              
            
        } else if (input.toLowerCase() === 'project'){
            ld.push(<TerminalOutput key={ld.length + 1}>Redirecting you to github...</TerminalOutput>);
            window.open('https://github.com/Tech-with-anmol');
        } else {
            ld.push(<TerminalOutput key={ld.length + 1}>Command not found</TerminalOutput>);
        }

        setLineData(ld);
    }

    return (
        <div className='terminal' >
            <Terminal name='AK' colorMode={ColorMode.Dark} onInput={handleInput}>
                {lineData}
            </Terminal>
        </div>
    );
};

export default TerminalComponent;

