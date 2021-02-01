import React, {useState, useEffect} from 'react'

const BasicUseEffect = () => {
  const [count, setCount] = useState(0)
  const [item, setItem] = useState('')

  // useEffectの第二引数を空にするとrender毎に実行される関数をつくる
  useEffect(()=>{
    console.log("useEffect invoked")
  },[count])

  return (
    <div>
      <button onClick={()=>setCount(prevCount=>prevCount+1)}>Click {count}</button>
      <input type="text" value={item} onChange={evt=>setItem(evt.target.value)} />
    </div>
  )
}

export default BasicUseEffect
