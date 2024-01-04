import { Component } from '../core/core'
import messageStore from '../store/message'

export default class Switch extends Component {
  constructor(){
    super({
      tagName:'ul'
    })
  }
  render(){
    this.el.classList.add('filter')
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
  }
}