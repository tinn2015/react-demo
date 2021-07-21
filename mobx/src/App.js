/*
 * @Creater: douqiting
 * @Date: 2021-05-16 16:25:14
 * @LastEditTime: 2021-06-07 11:11:22
 * @FilePath: /react-demo/mobx/src/App.js
 *
 */
import {Component} from 'react'
import {observer} from 'mobx-react'
import Home from './pages/home'
import globalStore from './store/globalStore'
import store from './store/index'

import './App.css';

@observer
class App extends Component {
  login = () => {
    // const isLogin = globalStore.isLogin
    // globalStore.setLoginStatus(!isLogin)
    const isLogin = store.isLogin
    store.changeLogin(!isLogin)
  }

  render () {
    const isLogin = store.isLogin
    console.log(isLogin, 'app')
    return (
      <div className="App">
        <button onClick={this.login}>改变登录状态</button>
        <div style={{color: 'red'}}>当前{isLogin ? '已登录' : '未登录'}</div>
       <Home></Home>
      </div>
    );
  }
}

export default App;
