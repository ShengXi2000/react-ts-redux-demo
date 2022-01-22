import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

// 引入 Provider
import {Provider} from 'react-redux'
// 引入 store
import store from './store'

ReactDOM.render(
  <React.StrictMode>
    {/* 应用store并包裹需要共享的组件 */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
