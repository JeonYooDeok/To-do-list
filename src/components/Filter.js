import { Component } from '../core/core'
import messageStore from '../store/message'

import itemStore from '../store/item'

export default class Switch extends Component {
  constructor(){
    super({
      tagName:'ul'
    })
    itemStore.subscribe(['items', 'loading'], () => {
      this.render()
    })
  }
  render(){
    this.el.classList.add('filter', 'hide')
    this.el.innerHTML = /* html */`
      <li data-value="all" class="active">전체</li>
      <li data-value="false">미완료</li>
      <li data-value="true">완료</li>
    `


    const liElements = this.el.querySelectorAll('li')
    const selectedValue = 'all'
    console.log(`Selected value: ${selectedValue}`)
    liElements.forEach(li => {
      li.addEventListener('click', function() {
        liElements.forEach(otherLi => {
          otherLi.classList.remove('active')
        })
        const selectedValue = li.getAttribute('data-value')
        li.classList.add('active')
        console.log(selectedValue)
        messageStore.state.message = selectedValue
      })
    })


    
    if(itemStore.state.items.length == 0 && itemStore.state.loading == false){
      this.el.classList.add('hide')
    }else{
      this.el.classList.remove('hide')
    }
  }
}