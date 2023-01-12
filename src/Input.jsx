import React from 'react'
import Result from './Result'
import {useState} from 'react'

function Input({res}) {
  const [val, setVal] = useState("")
  const [show, setShow] = useState(false)
  function func1(e){
    setVal(e.target.value)
    setShow(false)
  }
  function func2(){
    setVal(val)
    setShow(true)
  }
  
  return (
    <div>
        <input type="text" onChange={func1}/>
        <button onClick={func2}>Search</button>
        {show? <Result mylist = {res} food={val}/> : ""}
    </div>
  )
}

export default Input