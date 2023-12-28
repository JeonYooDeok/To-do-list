import { Component } from '../core/core'
import Switch from '../components/Switch'

import messageStore from '../store/message'

export default class Item extends Component {  
  constructor(){
    super()
    
    messageStore.subscribe(['message', 'swit'], () => {
      console.log(messageStore.state.message)
      console.log(messageStore.state.swit)
      console.log(this.el)
      
      if(messageStore.state.message == 'completed'){
        if(this.el.classList.contains('done')){
          this.el.classList.remove('hide')
        }else if(!this.el.classList.contains('done')){
          this.el.classList.add('hide')
        }
      }else if(messageStore.state.message == 'incompleted'){
        if(this.el.classList.contains('done')){
          this.el.classList.add('hide')
        }else if(!this.el.classList.contains('done')){
          this.el.classList.remove('hide')
        }
      }else{
        this.el.classList.remove('hide')
      }
    })
  }
  render(){
    this.el.classList.add('item')
    this.el.innerHTML = /* html */`
      <h2></h2>
      <span class="list__icon material-icons">menu</span>
      <p class="list__title">title</div>
      `
    const h2El = this.el.querySelector('h2')
    const switchEl = new Switch()
    this.el.append(
      switchEl.el
    )

    let toggle = false
    switchEl.el.addEventListener('click', function(){
      toggle = !toggle
      if(toggle){
        switchEl.el.classList.add('active')
        this.parentNode.classList.add('done')
      }else{
        switchEl.el.classList.remove('active')        
        this.parentNode.classList.remove('done')
      }
      h2El.textContent = toggle
      messageStore.state.swit = toggle
    })
    
    
    
    // console.log(toggle)
    // console.log(this)
    // console.log(this.el)
    // console.log(messageStore.state.message)

    

    
    

  }
}