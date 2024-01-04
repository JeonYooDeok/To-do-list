import { Component } from '../core/core'

export default class Save extends Component {
  constructor(){
    super({
      tagName:'button'
    })
  }
  render(){
    this.el.classList.add('newTodo')
    this.el.innerHTML = /* html */`
      저장
    `  
  }
}