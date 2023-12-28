import { Component } from '../core/core'
import Save from './Save'
import Cancel from './Cancel'

import modalStore from '../store/modal'
import titleStore from '../store/title'

export default class Modal extends Component {
  constructor(){
    super()
    
    modalStore.subscribe(['view'], () => {
      console.log(modalStore.state.view)
      if(modalStore.state.view){
        this.el.classList.remove('hide')
      }else{
        this.el.classList.add('hide')
        this.el.querySelector('input').value = ''
      }
      
    })
  }
  render(){
    this.el.classList.add('modal')
    this.el.classList.add('hide') //나중에 지워야 됨
    this.el.innerHTML = /* html */`
      <div class="modal__wrapper">
        <p>Title</p>
        <input/>
      </div>
    `
    // input value를 스토어에 저장
    const inputEl = this.el.querySelector('input')
    inputEl.addEventListener('input',() => {
      titleStore.state.value = inputEl.value
      console.log(titleStore.state.value)
    })
    // input value를 스토어에 저장


    const buttonsWrapper = document.createElement('div');
    const cancelBtn = new Cancel()
    const saveBtn = new Save()
    
    
    buttonsWrapper.classList.add('modal__buttonsWrapper')
    buttonsWrapper.append(
      cancelBtn.el,
      saveBtn.el
      )
    this.el.querySelector('.modal__wrapper').append(buttonsWrapper)
    cancelBtn.el.addEventListener('click',() => {      
      console.log(this.el)
      
    })



    console.log(this.el)
    


  }
}