import type { FormInputs } from "../config/types/formInput";

type FieldName = keyof FormInputs;

export const inputFields: {
  label: string;
  type: string;
  name: FieldName;
  placeholder?: string;
}[] = [
  { name: "email", label: "Email", type: "email" },
  { name: "role", label: "Role", type: "select" },
  { name: "password", label: "Password", type: "password" },
  { name: "confirmPassword", label: "Confirm Password", type: "password" },
];
