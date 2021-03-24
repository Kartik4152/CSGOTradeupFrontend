import React,{useEffect,useState,useContext} from 'react'
import {ControlsContext} from './ControlContext';
import TradeupComponent from './TradeupComponent';
import './Hero.css'
import io from 'socket.io-client';

const socket=io('https://csgotradeupbackend.herokuapp.com/');
console.log('wot');

const Hero=()=>{
    const [controls]=useContext(ControlsContext);
    const [tradeups,setTradeups]=useState([]);
    const [isLoading,setIsLoading]=useState(false);
    const [isLoopRunning,setIsLoopRunning]=useState(false);
    useEffect(()=>{
        socket.on('getCollectionTradeups',msg=>setTradeups((prev)=>{
            return([...prev,msg]);
        }));
        socket.on('isLoopRunning',msg=>setIsLoopRunning(msg));
    },[]);
    const getTradeups=()=>{
        setTradeups([]);
        socket.emit('getRunningStatus');
        if(isLoopRunning)
            socket.emit('stopLoop');
        socket.emit('getTradeups',controls);
        setIsLoading(true);
    }
    return(
        <div className='container'>
            <div id='btnContainer'><button id='tradeupbtn' onClick={getTradeups}>Get Tradeups</button>{isLoading?<div>Loaded : {tradeups.length}/{controls.statTrak?'35':'66'}</div>:false}</div>
            {tradeups.map((collection)=>{
                if(collection.tradeups.length!==0)
                    return(<TradeupComponent collection={collection} key={collection.collection}></TradeupComponent>)
                return false
            })}
        </div>
    )
}
export default Hero;