import { Component } from '../core/core'

import messageStore from '../store/message'

export default class Switch extends Component {
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
    this.el.classList.add('switch')
    // this.el.classList.add('active')
    this.el.innerHTML = /* html */`
      <span class="inComplete">미완료</span>
      <div class="background">
        <div class="indicator"></div>
      </div>
      <span class="complete">완료</span>
    `


 // 스위치 선택시 해당 값 토글 시작
 const modifyItems = async (itemId, itemTitle, itemDone) => {
  const res = await fetch(`https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${itemId}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      'apikey': 'KDT7_GrZ1eYBo', // KDT 7기 APIKEY 입니다!
      'username': 'KDT7_JeonYooDeok'
    },
    body: JSON.stringify({
      title: itemTitle,
      done: !itemDone
    })
  })
  const json = await res.json()
  itemDone = json.done
  return itemDone
}      
// 스위치 선택시 해당 값 토글 끝

    this.el.addEventListener('click', async (event) => {
      
      await event.stopPropagation();
      item.done = await modifyItems(item.id, item.title, item.done)
      if(item.done){
        this.el.classList.add('active')
        this.el.parentNode.classList.add('done')
        if(messageStore.state.message == 'false'){
          this.el.parentNode.classList.add('hide')
        }else if(messageStore.state.message == 'true'){
          this.el.parentNode.classList.remove('hide')
        }else{
          this.el.parentNode.classList.remove('hide')
        }
      }else{
        this.el.classList.remove('active')
        this.el.parentNode.classList.remove('done')
        if(messageStore.state.message == 'false'){
          this.el.parentNode.classList.remove('hide')
        }else if(messageStore.state.message == 'true'){
          this.el.parentNode.classList.add('hide')
        }else{
          this.el.parentNode.classList.remove('hide')
        }
      }      
    })

    if(item.done){
      this.el.classList.add('active')
    }else{
      this.el.classList.remove('active')
    }
  }
}