import { atom, RecoilState } from 'recoil';


export const MessageState: = atom({
  key: 'alertState',
  default: {
    open: false,
    primary: '',
    secondary: '',
    type: 'info',
    timeout: 5000,
  },
});