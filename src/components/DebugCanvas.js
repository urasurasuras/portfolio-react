import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";


function DebugCanvas() {
        const [isListening, setIsListening] = useState(true);
      
        const handleScroll = () => {
            console.log(isListening);
// if (isListening)
        //   console.log('User is scrolling!');
        };
      
        useEffect(() => {
          const toggleListener = () => {
            setIsListening(prev => !prev);
          };
      
          window.addEventListener('scroll', handleScroll);
      
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, [isListening]);
      
        return (
          <div>
            <button onClick={() => setIsListening(prev => !prev)}>
              Toggle scroll listener
            </button>
            <p>
              Scroll listener is {isListening ? 'active' : 'inactive'}
            </p>
          </div>
        );
}

export default DebugCanvas;
