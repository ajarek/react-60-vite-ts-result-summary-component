import React from 'react'
import data from '../assets/data.json'
const Items = () => {

  
  return (
    <div className='items'>
      {data[1].map((item,index) =>{
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