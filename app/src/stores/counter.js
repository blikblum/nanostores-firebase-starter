import { action, atom } from 'nanostores'

export const $counter = atom(0)

export const incrementCount = action($counter, 'increment', (store) => {
  store.set(store.get() + 1)
})
