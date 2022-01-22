// 整个应用只有一个store
// 引入创建store对象的redux
import {createStore, applyMiddleware, combineReducers} from 'redux'
// 引入redux-thunk中间间，能够在dispatch时传递函数来实现异步action
import thunk from 'redux-thunk'
// 引入为count服务的reducer
import countReducer from './reducers/count'

// 传递第二个参数，应用thunk中间件
// 引入redux devtools
import {composeWithDevTools} from 'redux-devtools-extension'
// 引入connect，连接UI组件和redux
import {connect} from 'react-redux'

import {
  incrementAction,
  decrementAction,
  incrementAsyncAction,
} from './actions/count'
import {StateType} from './types'
export const mapStateToProps = (state: StateType) => ({
  count: state.count,
})

export const mapDispatchToProps = {
  increment: incrementAction,
  decrement: decrementAction,
  incrementAsync: incrementAsyncAction,
}
// 避免出错使用any
const StoreActions: any = connect(mapStateToProps, mapDispatchToProps)
export {StoreActions}

export default createStore(
  // 使用combineReducers来创建一个能够进行多组件状态之间共享state的store
  combineReducers({count: countReducer}),
  composeWithDevTools(applyMiddleware(thunk))
)
