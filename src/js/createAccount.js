import initSignUp from "./libs/auth/initSignUp";
import initCompleteSignUp from "./libs/auth/completeSignUp";
export function CreateAccount() {
  initSignUp();
  initCompleteSignUp();
}
