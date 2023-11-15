import 'setup/all.js'
import { withStore } from 'lit-nanostores'
import { $counter, incrementCount } from 'stores/counter.js'
import { saveUser } from 'stores/user.service.js'
import { $user } from 'stores/user.js'
import { Component, html } from 'helpers/component.js'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class AppRoot extends withStore(Component) {
  static get properties() {
    return {
      /**
       * The number of times the button has been clicked.
       */
      counter: { type: Number, store: $counter },
      user: { store: $user },
    }
  }

  submitUser(e) {
    e.preventDefault()
    const data = new FormData(e.target)
    saveUser({ name: data.get('name'), email: data.get('email') })
  }

  render() {
    const { counter, user = {} } = this
    return html`
      <slot></slot>
      <div class="card">
        <button @click=${incrementCount} part="button">counter is ${counter}</button>
      </div>
      <div>User name: ${user.name}</div>
      <div>User email: ${user.email}</div>
      <form @submit=${this.submitUser}>
        <label for="user-name">Name</label>
        <input type="text" name="name" id="user-name" .value=${user.name || null} />
        <label for="user-email">Email</label>
        <input type="email" name="email" id="user-email" .value=${user.email || null} />
        <button type="submit">Save</button>
      </form>
    `
  }

  static get styles() {}
}

window.customElements.define('app-root', AppRoot)
