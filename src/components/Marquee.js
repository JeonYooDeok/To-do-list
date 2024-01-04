import { Component } from '../core/core'

export default class Marquee extends Component {
  render(){
    this.el.classList.add('marqueeWrapper')
    this.el.innerHTML = /* html */`
      <div class="marquee">
          <div class="track left">
            <div class="content">
              &nbsp;
              <span>FRONTEND</span>
              <span class="stroke">DEVELOPMENT</span>
              <span>UI·UX</span>
              <span class="stroke">DESIGN</span>
              <span>FRONTEND</span>
              <span class="stroke">DEVELOPMENT</span>
              <span>UI·UX</span>
              <span class="stroke">DESIGN</span>
              <span>FRONTEND</span>
              <span class="stroke">DEVELOPMENT</span>
              <span>UI·UX</span>
              <span class="stroke">DESIGN</span>
              <span>FRONTEND</span>
              <span class="stroke">DEVELOPMENT</span>
              <span>UI·UX</span>
              <span class="stroke">DESIGN</span>
            </div>
          </div>
        </div>
        <div class="marquee">
          <div class="track right">
            <div class="content">
              &nbsp;
              <span>FRONTEND</span>
              <span class="stroke">DEVELOPMENT</span>
              <span>UI·UX</span>
              <span class="stroke">DESIGN</span>
              <span>FRONTEND</span>
              <span class="stroke">DEVELOPMENT</span>
              <span>UI·UX</span>
              <span class="stroke">DESIGN</span>
              <span>FRONTEND</span>
              <span class="stroke">DEVELOPMENT</span>
              <span>UI·UX</span>
              <span class="stroke">DESIGN</span>
              <span>FRONTEND</span>
              <span class="stroke">DEVELOPMENT</span>
              <span>UI·UX</span>
              <span class="stroke">DESIGN</span>
            </div>
          </div>
        </div>
        <div class="marquee">
          <div class="track left">
            <div class="content">
              &nbsp;
              <span>DESIGN</span>
              <span class="stroke">DEVELOPMENT</span>
              <span>FRONTEND</span>
              <span class="stroke">UI·UX</span>
              <span>DESIGN</span>
              <span class="stroke">DEVELOPMENT</span>
              <span>FRONTEND</span>
              <span class="stroke">UI·UX</span>
              <span>DESIGN</span>
              <span class="stroke">DEVELOPMENT</span>
              <span>FRONTEND</span>
              <span class="stroke">UI·UX</span>
              <span>DESIGN</span>
              <span class="stroke">DEVELOPMENT</span>
              <span>FRONTEND</span>
              <span class="stroke">UI·UX</span>
            </div>
          </div>
        </div>
    
    `
  }
}