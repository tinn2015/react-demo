/*
 * @Creater: douqiting
 * @Date: 2021-06-07 10:52:38
 * @LastEditTime: 2021-06-07 17:03:25
 * @FilePath: /react-demo/mobx/src/store/index.js
 */
import {makeObservable, observable, computed, action, autorun} from 'mobx'
class ObservableTodoStore {
  todos = [];
  pendingRequests = 0;
  isLogin = false

  constructor() {
    makeObservable(this, {
      todos: observable,
      pendingRequests: observable,
      completedTodosCount: computed,
      report: computed,
      addTodo: action,
      isLogin: observable,
      changeLogin: action
    });
    autorun(() => console.log(this.report));
  }

  get completedTodosCount() {
    return this.todos.filter(
      todo => todo.completed === true
    ).length;
  }

  get report() {
    if (this.todos.length === 0)
      return "<none>";
    const nextTodo = this.todos.find(todo => todo.completed === false);
    return `Next todo: "${nextTodo ? nextTodo.task : "<none>"}". ` +
      `Progress: ${this.completedTodosCount}/${this.todos.length}`;
  }

  addTodo(task) {
    this.todos.push({
      task: task,
      completed: false,
      assignee: null
    });
  }

  changeLogin (flag) {
    this.isLogin = flag
  }
}

const observableTodoStore = new ObservableTodoStore();
export default observableTodoStore