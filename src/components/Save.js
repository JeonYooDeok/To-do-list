import { Component } from '../core/core'

import titleStore from '../store/title'

export default class Save extends Component {
  constructor(){
    super({
      tagName:'button'
    })
    titleStore.subscribe(['value'], () => {
      console.log(titleStore.state.value)
    })
  }
  render(){
    this.el.classList.add('newTodo')
    this.el.innerHTML = /* html */`
      저장
    `

async function createTodo() {
  const res = await fetch('https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'apikey': 'KDT7_GrZ1eYBo', // KDT 7기 APIKEY 입니다!
      'username': 'KDT7_JeonYooDeok'
    },
    body: JSON.stringify({
      title: titleStore.state.value
    })
  })
  const json = await res.json()
  console.log(json)

  return json
}

  
     this.el.addEventListener('click',() => {
      console.log('click!')
      createTodo()
      
    })
  }
}