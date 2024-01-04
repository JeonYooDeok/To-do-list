import { Component } from '../core/core'
import menuStore from '../store/menu'

export default class Mobilemenu extends Component {
  constructor(){
    super({
      state: {
        menus: [
          {
            name: 'About',
            href: '#/'
          },
          {
            name: 'Todo',
            href: '#/Todo'
          }
        ]
      }

    })
    window.addEventListener('popstate', () => {
      this.render()
    })
    menuStore.subscribe(['view'], () => {
      console.log(menuStore.state.view)
      if(menuStore.state.view){
        this.el.classList.remove('hide')
      }else{
        this.el.classList.add('hide')
      }      
    })
  }
  render(){
    this.el.classList.add('modal', 'mobileMenu', 'hide')
    this.el.innerHTML = /* html */`
        <div class="mobileClose">
          <span class="material-icons close">close</span>
        </div>
        <ul>
          ${this.state.menus.map(menu => {
            const href = menu.href
            const hash = location.hash
            const isActive = href == hash
            return /* html */`
              <li>
                <a class="${isActive ? 'navActive' : ''}" href="${menu.href}">
                  ${menu.name}
                </a>
              </li>
            `
          }).join('')}
        </ul>
        <div class="iconWrapper">
          <a class="externalLink insta" href="https://www.instagram.com/deok0215/" target="_blank">
          </a>
          <a class="externalLink velog" href="https://velog.io/@yoodeok/posts" target="_blank">
          </a>
        </div>
      </div>
    `
    const closeBtn = this.el.querySelector('.close')
    closeBtn.addEventListener('click', () => {
      menuStore.state.view = false
    })
   console.log(menuStore.state.view) 
  }
}