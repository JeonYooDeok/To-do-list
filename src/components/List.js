import { Component } from '../core/core'
import Item from '../components/Item'
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
    
    // // 할 일 조회, 갯수만큼 item생성 시작
    // ;(async () => {
    //   // const res = await fetch('https://jsonplaceholder.typicode.com/posts', { method: 'GET' })
    //   const res = await fetch('https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos', {
    //     headers: {
    //       'content-type': 'application/json',
    //       'apikey': 'KDT7_GrZ1eYBo', // KDT 7기 APIKEY 입니다!
    //       'username': 'KDT7_JeonYooDeok'
    //     },
    //   })
    //   const data = await res.json()
    //   console.log(data)
    //   console.log(data.length)

    //   // 각각의 title을 새로운 배열로 저장
    //   const titlesArray = [];
    //   for (let i = 0; i < data.length; i++) {
    //     titlesArray.push(data[i].title);
    //   }
    //   console.log(titlesArray);
    //   // 각각의 title을 새로운 배열로 저장      
      
    //   // length만큼 item생성
    //   this.el.classList.add('list')
    //   this.el.id = 'list'
    //   for (let i = 0; i < data.length; i++) {
    //     this.el.append(
    //       new Item().el
    //     )
    //   }
    //   const title = document.querySelector('.list__title')
    //   console.log(title)
    //   title.textContet = "bbb"
    //   console.log(title.textContet)
    //   // length만큼 item생성

    //   const a = this.el.querySelector('.list__title')
    //   console.log(a)
      
    // })()
    // // 할 일 조회, 갯수만큼 item생성끝
    
    // // this.el.append(
    // //   new Item().el,
    // //   new Item().el,
    // //   new Item().el
    // // )

    
    this.el.classList.add('list')
    this.el.innerHTML = /* html */`
      <div class="items"></div>
    `
    console.log(itemStore.state.items)
    const itemsEl = this.el.querySelector('.items')
    itemsEl.append(
      itemStore.state.items.map(item => {
        return item.title
      })
    )
    


    // sortable js 시작
    new Sortable(this.el, {
      handle: '.list__icon', // handle's class
      animation: 150
    })
    // sortable js 끝
  }
}