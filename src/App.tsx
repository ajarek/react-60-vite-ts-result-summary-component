 import {useState, createContext} from 'react'
 import Result from './components/Result'
 import Summary from './components/Summary'
 import data from './assets/data.json'
 const random=Math.floor(Math.random() * data.length)
 export type GlobalContent = {
  newData: [{category:string, score:number, icon:string}]
  setNewData: (c:[]) => void
}
export const AppContext = createContext<GlobalContent>({
  newData: [{category:'', score:0, icon:''}],
  setNewData: () => [],
})

function App() {
  
  const [newData,setNewData]=useState(data[random])

  return (
    <div className="App">
      <AppContext.Provider value={{newData,setNewData}}>
    <Result/>
    <Summary/>
    </AppContext.Provider>
    </div>
  )
}

export default App
