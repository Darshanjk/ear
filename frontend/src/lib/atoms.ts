import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export interface User {
  accessToken: string;
  name: string;
  email: string;
  isAdmin: boolean;
}

const userState = atom<User>({
  key: "userState",
  default: {
    accessToken: "",
    name: "",
    email: "",
    isAdmin: false,
  },
  effects_UNSTABLE: [persistAtom],
});

export default userState;
