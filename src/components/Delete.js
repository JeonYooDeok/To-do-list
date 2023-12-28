import { Component } from '../core/core'

export default class Switch extends Component {
  constructor(){
    super({
      tagName:'button'
    })
  }
  render(){
    this.el.classList.add('delete')
    this.el.innerHTML = /* html */`
      완료 삭제
    `
  }
}