import { atom } from 'recoil';

export const Modal = atom({
  key: 'Modal',
  default: {
    open: false,
    data: <></>
  }
})