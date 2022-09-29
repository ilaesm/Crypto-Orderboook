import React from 'react'
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import "./Graph.css"
function Graph() {
  return (
    <div className='graph'>
        <AdvancedRealTimeChart width='870' height='600' symbol='BTCUSD' theme="dark"></AdvancedRealTimeChart>
        </div>
  )
}

export default Graph