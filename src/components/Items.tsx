import {  useState, useContext, useEffect } from 'react'
import { AppContext } from '../App'
const Items = () => {
  const { newData, setNewData} = useContext(AppContext)
  
  return (
    <div className='items'>
      {newData.map((item,index) =>{
        return(
          <div className="wrapper" key={index}>
          <img src={item.icon}></img>
          <div>{item.category}</div>
          <div className='score'>{item.score}/100</div>
          </div>
        )
      })}
    </div>
  )
}

export default Items