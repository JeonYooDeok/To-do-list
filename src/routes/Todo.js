import { Component } from '../core/core'

export default class Todo extends Component {
  render(){
    this.el.innerHTML = /* html */`
      <h1>To do list</h1>
    `
  }
}