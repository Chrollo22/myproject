import React from 'react'
import {useState} from 'react'
import Input from './Input'
const App = () => {
  const [list, setList] = useState([
    {
      nom:"carotte",
      type:"legume",
    },
    {
      nom: "ananas",
      type:"fruit"
    },
    {
      nom: "poivron",
      type:"legume"
    },
    {
      nom: "orange",
      type:"fruit"
    },
    {
      nom: "prune",
      type:"fruit"
    },
    {
      nom:"oignon",
      type:"legume"
    },
    {
      nom:"brocoli",
      type:"legume"
    },
    {
      nom:"kiwi",
      type:"fruit"
    }
  ])
  return(
    <div>
      <Input res = {list} />
      
    </div>
  )
}
export default App