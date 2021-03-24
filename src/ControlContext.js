import React,{useState,createContext} from 'react';

const ControlsContext=createContext();

const ControlsProvider=(props)=>{
    const [controls,setControls]=useState({
        minProfit:0,
        budget:999999,
        statTrak:false
    });
    return(
        <ControlsContext.Provider  value={[controls,setControls]}>
            {props.children}
        </ControlsContext.Provider>
    )
}
export {ControlsProvider,ControlsContext}