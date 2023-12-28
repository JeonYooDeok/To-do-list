import { Component } from '../core/core'
import Headline from '../components/Headline'
import Panel from '../components/Panel'
import List from '../components/List'
import Modal from '../components/Modal'

export default class Todo extends Component {
  render(){
    const headline = new Headline().el

    this.el.classList.add('container')
    this.el.append(
      headline,
      new Panel().el,
      new List().el,
      new Modal().el
    )
  }
}