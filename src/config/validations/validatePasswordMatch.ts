import type { ErrorField } from "../types/error.field";

export const validatePasswordMatch = (
  password: string,
  confirmPassword: string
): ErrorField[] => {
  if (password !== confirmPassword) {
    return [
      {
        field: "confirmPassword",
        message: "Passwords do not match",
      },
    ];
  }
  return [];
};
