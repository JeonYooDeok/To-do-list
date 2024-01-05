import { Component } from '../core/core'
import { deleteItems } from '../store/item'

import itemStore from '../store/item'

export default class Switch extends Component {
  constructor(){
    super({
      tagName:'button'
    })
    itemStore.subscribe(['items', 'loading'], () => {
      this.render()
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

    if(itemStore.state.items.length == 0 && itemStore.state.loading == false){
      this.el.classList.add('hide')
    }else{
      this.el.classList.remove('hide')
    }
    
  }
}