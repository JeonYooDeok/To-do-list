import { Component } from '../core/core'
import Switch from './Switch'
import Viewdetail from '../components/Viewdetail'

import messageStore from '../store/message'


export default class Item extends Component {
  constructor(props){
    super({
      props
    })
    messageStore.subscribe(['message'], () => {      
      if(this.el.classList.contains('done')){
        if(messageStore.state.message == 'false'){
          this.el.classList.add('hide')
        }else if(messageStore.state.message == 'true'){
          this.el.classList.remove('hide')
        }else{
          this.el.classList.remove('hide')
        }
      }else if(!this.el.classList.contains('done')){
        if(messageStore.state.message == 'false'){
          this.el.classList.remove('hide')
        }else if(messageStore.state.message == 'true'){
          this.el.classList.add('hide')
        }else{
          this.el.classList.remove('hide')
        }
      }
      
    })
  }
  render(){    
    const { item } = this.props
    console.log(this.props)
    console.log(item)
    const itemDone = item.done
    console.log(itemDone)
    this.el.classList.add('item')
    this.el.innerHTML = /* html */`
      <p class="item__title">${item.title}</p>
    `
    this.el.append(
      new Switch({
        item
      }).el,
      new Viewdetail({
        item
      }).el
    )

    this.el.addEventListener('click', () => {
      this.el.querySelector('input').value = item.title
      this.el.querySelector('.modal').classList.remove('hide')
    })
    if(item.done){
      this.el.classList.add('done')
    }else{
      this.el.classList.remove('done')
    }


    console.log(messageStore.state.message)
  }
}