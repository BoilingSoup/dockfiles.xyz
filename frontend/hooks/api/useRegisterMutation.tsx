import { useMutation } from "react-query";
import { useAuth, User } from "../../contexts/AuthProvider";
import {
  attemptRegister,
  registerErrorNotification,
  RegisterFormValues,
  registerSuccessNotification,
  verifyEmailNotification,
} from "./helpers";

export const useRegisterMutation = (modalCloseHandler: () => void) => {
  const { setUser } = useAuth();

  return useMutation((values: RegisterFormValues) => attemptRegister(values), {
    onSuccess: (user: User) => {
      setUser(user);
      modalCloseHandler();
      registerSuccessNotification();
      verifyEmailNotification();
    },
    onError: () => {
      registerErrorNotification();
    },
  });
};
