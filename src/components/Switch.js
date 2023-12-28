import { Component } from '../core/core'
export default class Switch extends Component {
  render(){
    this.el.classList.add('switch')
    // this.el.classList.add('active')
    this.el.innerHTML = /* html */`
      <span class="inComplete">미완료</span>
      <div class="background">
        <div class="indicator"></div>
      </div>
      <span class="complete">완료</span>
    `       
  }
}