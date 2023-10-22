import { atom } from 'recoil';

// export const searchData = atom({
//   key: 'searchData',
//   default: ''
// })

export const Modal = atom({
  key: 'Modal',
  default: {
    open: false,
    data: <></>
  }
})