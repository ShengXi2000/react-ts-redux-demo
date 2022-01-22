import {StorePropsType, ActionPropsType} from '../../store/types'

// count组件最终的props的类型是由自身被传递的props和connect调用传递的需要做一个组合
export type CountPropsType = {
  title?: string
} & StorePropsType &
  ActionPropsType
