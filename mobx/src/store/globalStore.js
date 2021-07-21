import {observable, action, autorun} from 'mobx'

class GlobalStore {
  @observable isLogin = false

  constructor () {
    this.isLogin = window.localStorage.getItem('Authorization') ? true : false
  }

  @action setLoginStatus (flag) {
    this.isLogin = flag
    if (!flag) {
      window.localStorage.removeItem('Authorization')
    }
  }

}

export default new GlobalStore()