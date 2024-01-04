import { Component } from '../core/core'
import Marquee from '../components/Marquee'
import Intro from '../components/Intro'

export default class About extends Component {
  render(){
    this.el.classList.add('aboutContainer')
    this.el.append(
      new Marquee().el,
      new Intro().el
    )
  }
}