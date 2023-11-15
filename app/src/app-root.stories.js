import './app-root.js'

const defaultUser = { name: 'Jim', email: 'yyy@gmail.com' }

export default {
  title: 'Components/AppRoot',
  component: 'app-root',
  parameters: {
    actions: {
      handles: ['save-users'],
    },
  },
  args: {
    counter: 3,
    user: defaultUser,
  },
}

export const Default = {
  args: {},
}
