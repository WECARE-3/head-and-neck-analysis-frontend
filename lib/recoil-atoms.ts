import { atom, selector } from 'recoil'

export const userState = atom({
  key: 'userState',
  default: {
    username: '',
  },
})

export const loginState = selector({
  key: 'loginState',
  get: ({ get }) => {
    return get(userState).username.length === 0 ? false : true
  },
})
