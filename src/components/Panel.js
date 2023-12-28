import { Component } from '../core/core'
import Filter from '../components/Filter'
import Delete from '../components/Delete'

export default class Panel extends Component {
  render(){
    this.el.classList.add('panel')
    this.el.append(
      new Filter().el,
      new Delete().el
    )
  }
}