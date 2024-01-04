import { Component } from '../core/core'
import { deleteItems } from '../store/item'

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
    this.el.addEventListener('click',function(){
      deleteItems()
    })
    
  }
}