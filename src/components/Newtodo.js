import { Component } from '../core/core'

import modalStore from '../store/modal'


export default class Newwtodo extends Component {
  constructor(){
    super({
      tagName:'button'
    })
  }
  render(){
    this.el.classList.add('newTodo')
    this.el.innerHTML = /* html */`
      <span>+ 할 일 등록</span>
    `
    this.el.addEventListener('click', () => {
      modalStore.state.view = true
    })

   
    
  }
}