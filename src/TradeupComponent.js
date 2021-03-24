import React from 'react';
import './TradeupComponent.css'

const TradeupComponent=({collection})=>{
    return(
        <>
        <div className='tradeupTitle'>{collection.collection}</div>
        <div className='tradeupContainer'>
        {collection.tradeups.map((tradeup,index)=>{
            return(
                    <div className='individualContainer' key={`${tradeup.tradeup_weapon.name+tradeup.tradeup_weapon_wear}`}>
                        <div>{tradeup.tradeup_weapon.name}</div>
                        <div className='tradeupImg'><img src={tradeup.tradeup_weapon.imgUrl} alt="Skin"/></div>
                        <div>Wear : {tradeup.tradeup_weapon_wear}</div>
                        <div>Cost : {(tradeup.cost).toFixed(3)}$</div>
                        <div>MinProfit:{(tradeup.minProfit).toFixed(3)}$</div>
                        <div>MaxProfit:{(tradeup.maxProfit).toFixed(3)}$</div>
                        <div>FloatRequired:{'<'}{(tradeup.float_required).toFixed(4)}</div>
                        <div>Possible Outcomes :</div>
                        <div className='outcomes'>
                            {tradeup.outcomes.map((outcome_skin)=>{
                                return(
                                    <img src={outcome_skin.weapon.imgUrl} alt='outcome skin' key={`${outcome_skin.weapon.imgUrl}+${outcome_skin.weapon.wear}`}></img>
                                )
                            })}
                        </div>
                    </div>
            )
        })}
        </div>
        </>
    )
}
export default TradeupComponent;
