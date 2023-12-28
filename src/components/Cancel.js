import { Component } from '../core/core'

import modalStore from '../store/modal'

export default class Cancel extends Component {
  constructor(){
    super({
      tagName:'button'
    })
  }
  render(){
    this.el.classList.add('newTodo')
    this.el.innerHTML = /* html */`
      취소
    `
    this.el.addEventListener('click', () => {
      modalStore.state.view = false
    })
  }
}