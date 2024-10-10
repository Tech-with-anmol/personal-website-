import { Input } from 'postcss';
import React, { useState } from 'react';
import Terminal from 'react-terminal-ui';
import { ColorMode } from 'react-terminal-ui';
import { TerminalInput, TerminalOutput } from 'react-terminal-ui';
import ReactDOM from 'react-dom';

const TerminalComponent = (prop = {}) => {
    const [lineData, setLineData] = useState([
        <TerminalOutput>HI!this is under development</TerminalOutput>,
    ]);


    function handleInput(input) {     
        let ld = [...lineData];
        ld.push(<TerminalInput>{input}</TerminalInput>); 
        
        if (input === 'help') {
            ld.push(<TerminalOutput>Available commands: help, about </TerminalOutput>);
        } else if(input === 'about') {
            ld.push(<TerminalOutput>Working bro working</TerminalOutput>);
        } else {
            ld.push(<TerminalOutput>Command not found</TerminalOutput>);
        }

        setLineData(ld);
    } 

    return(
        <div className='terminal'>
            <Terminal name='AK' colorMode={ ColorMode.Dark } onInput={ handleInput }>   
            {lineData}                  
            </Terminal>
        </div>
    );

  };

  
 
export default TerminalComponent;


