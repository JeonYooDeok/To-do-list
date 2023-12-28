import { Component } from '../core/core'
import Newtodo from './Newtodo'

export default class Headline extends Component {
  render(){
    this.el.classList.add('headline')
    this.el.innerHTML = /* html */`
      <h1>To do list</h1>
    `
    this.el.append(
      new Newtodo().el
    )
  }
}