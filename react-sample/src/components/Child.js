import React, {useContext} from 'react'
import AppContext from "../contexts/AppContext"

const Child = () => {
  const {dispatchProvided} = useContext(AppContext)
  return (
    <div>
      <button onClick={()=>dispatchProvided("add_1")}>Add + 1</button>
      <button onClick={()=>dispatchProvided("multiple_3")}>multiple * 3</button>
      <button onClick={()=>dispatchProvided("reset")}>reset</button>
    </div>
  )
}

export default Child
