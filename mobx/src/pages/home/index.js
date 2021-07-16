/*
 * @Author: your name
 * @Date: 2021-06-07 11:03:07
 * @LastEditTime: 2021-06-07 17:03:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-demo/mobx/src/pages/home/index.js
 */
import React, {Component} from 'react'
import todoStore from '../../store/index'

class Home extends Component{
    constructor (props) {
        super(props)
				this.state = {
					todoList: []
				}
    }

    add () {
        console.log('addtodo')
        todoStore.addTodo({
          label: '任务一' + Math.random()
        })
			this.setState({
				todoList: todoStore.todos
			})
    }
    render () {
        let todoList = this.state.todoList
				console.log(todoList, 'todolist')
        return (
            <div className="home">
                 <div onClick={() => {this.add()}}>addTodo</div>
                    {
                        todoList.map(i => {
                            return (<div key={i.task.label}>{i.task.label}</div>)
                        })
                    }
            </div>
        )
    }
}
export default Home