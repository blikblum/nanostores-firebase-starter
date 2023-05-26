---
to: <%- path%><%- tagName %>.js
---
import { Component, html, css } from 'helpers/component.js'

class <%- componentName %> extends Component {
  static styles = [css`
    <%- tagName %> {

    }
  `]

  render () {
    return html `
       <div class="row row-deck row-cards">
          <div class="col-4">
            <div class="card">
              <div class="card-body" style="height: 10rem"></div>
            </div>
          </div>
          <div class="col-4">
            <div class="card">
              <div class="card-body" style="height: 10rem"></div>
            </div>
          </div>
          <div class="col-4">
            <div class="card">
              <div class="card-body" style="height: 10rem"></div>
            </div>
          </div>
          <div class="col-12">
            <div class="card">
              <div class="card-body" style="height: 10rem"></div>
            </div>
          </div>
        </div>
      </div>
    `
  }
}

customElements.define('<%- tagName %>', <%- componentName %>)

export { <%- componentName %> }
