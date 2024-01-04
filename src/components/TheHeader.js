import { Component } from '../core/core'
import menuStore from '../store/menu'

export default class TheHeader extends Component {
  constructor(){
    super({
      tagName:'header',
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
    
  }
  render(){
    this.el.innerHTML = /* html */`
      <div class="header__left">
        <div class="mainLogo"></div>
        <nav class="menu pcOnly">
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
        </nav>        
      </div>
      <div class="header__right pcOnly">
        <a class="externalLink insta" href="https://www.instagram.com/deok0215/" target="_blank">
        </a>
        <a class="externalLink velog" href="https://velog.io/@yoodeok/posts" target="_blank">
        </a>
      </div>
      <div class="mobileMenu mobileOnly">
        <span class="material-icons">menu</span>
      </div>
    `
    const menuBtn = this.el.querySelector('.mobileMenu')
    menuBtn.addEventListener('click', () => {
      menuStore.state.view = true
    })
  }
}