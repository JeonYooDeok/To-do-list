import { Component } from '../core/core'

export default class Intro extends Component {
  render(){
    this.el.classList.add('introduction')
    this.el.innerHTML = /* html */`
      <div class="front">
        <div class="frontWelcome"></div>
        <div class="frontMouse"></div>
        <div class="frontMobile"></div>
      </div>
      <div class="back">
        <div class="backHello"></div>
        <div class="backThankyou"></div>
        <div class="backMobile"></div>
        <p class="job">Developer</p>
        <div class="profileImg"></div>
        <div class="nameBox">
          <p class="nameKor">전유덕</p>
          <p class="nameEng">Jeon Yoo Deok</p>
        </div>
      </div>    
    `
  }
}