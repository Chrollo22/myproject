import React from 'react'

function Result({mylist, food}){
  const filteredList = mylist.filter((p)=>p.type==food)
  return (
    <div>
        <ul>
        {filteredList.map((l)=><li>{l.nom}</li>)}
        </ul>
    </div>
  )
}

export default Result