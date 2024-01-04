import { Component } from './core/core'
import TheHeader from './components/TheHeader'
import Mobilemenu from './components/Mobilemenu'

export default class App extends Component{
  render(){
    const routerView = document.createElement('router-view')
    this.el.append(
      new TheHeader().el,
      routerView,
      new Mobilemenu().el
    )
  }
}