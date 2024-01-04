import { Component } from '../core/core'
import Save from './Save'
import Cancel from './Cancel'

import modalStore from '../store/modal'

import titleStore from '../store/title'


export default class Viewdetail extends Component {
  constructor(props){
    super({
      props
    })    
  }
  render(){
    console.log(this)
    console.log(this.el)
    const { item } = this.props
    console.log(item)
    console.log(item.id)
    
    
    
    this.el.classList.add('modal')
    this.el.classList.add('hide')
    this.el.innerHTML = /* html */`
      <div class="modal__wrapper">
        <div class="modal__wrapper__title">
          <p>할 일 정보</p>
          <div class="date">
            <span class = "created">생성 : ${item.createdAt}</span>
            <span class = "updated">수정 : ${item.updatedAt}</span>
          </div>
        </div>
        <input value="${item.title}"/>
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
    
    cancelBtn.el.addEventListener('click', (event) => {
      console.log(this.el)
      event.stopPropagation()
      this.el.classList.add('hide')
    })

    
    const modifyTitle = async (itemId, itemTitle, itemDone) => {
      const res = await fetch(`https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${itemId}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
          'apikey': 'KDT7_GrZ1eYBo', // KDT 7기 APIKEY 입니다!
          'username': 'KDT7_JeonYooDeok'
        },
        body: JSON.stringify({
          title: itemTitle,
          done: itemDone
        })
      })
      const json = await res.json()
      itemTitle = json.title
      return itemTitle
    }    

    saveBtn.el.addEventListener('click', async (event) => {
      event.stopPropagation()
      item.title = await modifyTitle(item.id, titleStore.state.value, item.done)
      this.el.parentNode.querySelector('p').innerHTML = item.title
      this.el.classList.add('hide')
    })
  }
}