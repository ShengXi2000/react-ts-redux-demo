// src/store/reducers/count.ts

import {INCREMENT, DECREMENT} from '../actions/actionTypes/count'
import {CountStateType} from '../types'
import {CountReducerActionType} from '../types'

export default function countReducer(
  preState: CountStateType = 0,
  action: CountReducerActionType
) {
  // 解构获得reducer当前的action类型和data
  const {type, data} = action
  switch (type) {
    case INCREMENT:
      return preState + data
    case DECREMENT:
      return preState - data
    default:
      return preState
  }
}
