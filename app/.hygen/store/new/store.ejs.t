---
to: "src/stores/<%- fileName %>.js"
storeName: <%- storeName = '$' + name %>
actionName: <%- actionName = 'set' + h.inflection.capitalize(name) %>
---
import { action, atom } from 'nanostores'

export const <%- storeName %> = atom({ })

export const <%- actionName %> = action(<%- storeName %>, '<%- actionName %>', (store, attrs) => {
  store.set(attrs)
})
