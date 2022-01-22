import {mapStateToProps, mapDispatchToProps} from '.'
import {INCREMENT, DECREMENT} from './actions/actionTypes/count'
export interface StateType {
  count: number
}

export type CountStateType = number

export type StorePropsType = ReturnType<typeof mapStateToProps>
export type ActionPropsType = typeof mapDispatchToProps

// 定义Count的reducer的action参数类型
export interface CountReducerActionType {
  type: typeof INCREMENT | typeof DECREMENT
  data: CountStateType
}
