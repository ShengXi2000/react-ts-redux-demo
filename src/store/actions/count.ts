// src/actions/count.ts

import {INCREMENT, DECREMENT} from './actionTypes/count'
import {CountStateType} from '../types'

// 创建Action
// 创建同步Action
export const incrementAction = (num: CountStateType) =>
  ({
    type: INCREMENT,
    data: num * 1,
  } as const)
export const decrementAction = (num: CountStateType) =>
  ({
    type: DECREMENT,
    data: num * 1,
  } as const)
// 创建异步Action，返回的回调参数是dispatch，异步action中一般都要掉用同步action
// 可以在这个地方发送网络请求
export const incrementAsyncAction =
  (data: CountStateType, time: number = 1000) =>
  (dispatch: any) =>
    setTimeout(() => dispatch(incrementAction(data)), time)
