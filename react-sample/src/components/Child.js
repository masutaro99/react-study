import React, {useContext} from 'react'
import AppContext from "../contexts/AppContext"

const Child = () => {
  const value = useContext(AppContext)
  return (
    <div>
      <h3>child</h3>
      {value}
    </div>
  )
}

export default Child
