import {  useState, useContext, useEffect } from 'react'
import { AppContext } from '../App'


const Result = () => {
 
  const { newData, setNewData} = useContext(AppContext)
 


  const procent=(+newData.reduce((a,b)=>a+b.score,0)/4).toFixed(0)
 
  
  return (
    <div className='result'>
      <h3>Your Result</h3>
      <div className="circle">
        <h1>{procent}</h1>
        <p>of 100</p>
      </div>
      <h2>Great</h2>
      <p>You scored higher then <span>65</span>% of<br/>
      the people who have taken <br /> these tests.
      </p>
    </div>
  )
}

export default Result