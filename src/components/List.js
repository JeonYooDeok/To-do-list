import { Component } from '../core/core'
import Item from './Item'
import Sortable from 'sortablejs'

import itemStore from '../store/item'


export default class List extends Component {  
  constructor(){
    super()
    itemStore.subscribe(['items'], () => {
      this.render()
    })
  }
  render(){    
    this.el.classList.add('list')
    this.el.innerHTML = /* html */`
      <div class="items"></div>
    `
    console.log(itemStore.state.items)
    const itemsEl = this.el.querySelector('.items')
    itemsEl.append(
      ...itemStore.state.items.map(item => {
        return new Item({
          item
        }).el
      })
    )
    
    console.log(this.el)
    console.log(this.el.querySelector('.items'))
    const switchBtn = this.el.querySelector('.switch')
    


    // sortable js 시작
    new Sortable(this.el.querySelector('.items'), {
      handle: '.list__icon', // handle's class
      animation: 150
    })
    // sortable js 끝
  }
}