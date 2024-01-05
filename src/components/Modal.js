import { Component } from '../core/core'
import Save from './Save'
import Cancel from './Cancel'
import { createTodo } from '../store/item'
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
    this.el.classList.add('modal', 'hide')
    this.el.innerHTML = /* html */`
      <div class="modal__wrapper">
        <p>할 일 등록</p>
        <input placeholder="새로운 할 일을 알려주세요!"/>
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
    
    
    saveBtn.el.addEventListener('click', async () => {
      console.log('click!')
      await createTodo(titleStore.state.value)
      modalStore.state.view = false
    })


  }
}