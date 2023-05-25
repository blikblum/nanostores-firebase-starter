import { action, atom } from 'nanostores'

export const $user = atom({ name: 'Jon', email: 'xxx@gmail.com' })

export const setUser = action($user, 'setUser', (store, attrs) => {
  store.set(attrs)
})
