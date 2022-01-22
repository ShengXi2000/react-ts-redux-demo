import React from 'react'
import {CountPropsType} from '../types/Count'
import {StoreActions} from '../../store'
const Count: React.FC<CountPropsType> = (props) => {
  console.log(props)
  const {count, title, increment, decrement, incrementAsync} = {...props}
  return (
    <div>
      <h1>{title}</h1>
      <h3>{count}</h3>
      <button onClick={() => increment(1)}>count++</button>
      <button onClick={() => decrement(1)}>count--</button>
      <button onClick={() => incrementAsync(1)}>count++ (async)</button>
    </div>
  )
}

export default StoreActions(Count)
