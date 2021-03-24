import React from 'react';
import Nav from './Nav';
import Hero from './Hero';
import {ControlsProvider} from './ControlContext';
import './App.css'
const App=()=>{
  return(
    <>
    <ControlsProvider>
      <Nav></Nav>
      <Hero></Hero>
    </ControlsProvider>
    </>
  )
}
export default App;