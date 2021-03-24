import React,{useEffect,useState,useRef,useContext} from 'react';
import {ControlsContext} from './ControlContext';
import './Nav.css'
const Nav=()=>{
    const navRef=useRef(null);
    const [isOpen,setIsOpen]=useState(false);
    const [controls,setControls]=useContext(ControlsContext);
    const animateShit=()=>{
            if(!isOpen)
            {
                navRef.current.style.top="0";
                navRef.current.style.height=`${window.innerHeight}px`;
                setIsOpen(true);
            }
            else
            {
                navRef.current.style.removeProperty('top');
                navRef.current.style.removeProperty('height');
                setIsOpen(false);
            }
    }
    const handleChange=(e)=>{
        setControls((prev)=>{
            return {
                ...prev,
                [e.target.id]:e.target.value,
            }
        })
    }
    useEffect(()=>{
        const doshit=()=>{
            if(isOpen)
            navRef.current.style.height=`${window.innerHeight}px`;
        };
        window.addEventListener('resize',doshit);
        return ()=>window.removeEventListener('resize',doshit);   
    });
    return(
    <div className='NavContainer' ref={navRef}>
        <div className='controls'>
            <h1>Settings</h1>
            <label htmlFor="budget">Budget ($) : </label>
            <input type="text" name="budget" id="budget" value={controls.budget} onChange={handleChange}/>
            <label htmlFor="minProfit">Minimum Profit ($) : </label>
            <input type="text" name="minProfit" id="minProfit" value={controls.minProfit} onChange={handleChange}/>
            <label htmlFor="statTrak">StatTrak : </label>
            <input type="checkbox" name="statTrak" id="statTrak" checked={controls.statTrak} onChange={(e)=>setControls((prev)=>{
                return({...prev,
                statTrak:e.target.checked
            })})}/>
        </div>
        <div id="settings" onClick={animateShit}>≡</div>
    </div>
    )
}

export default Nav;