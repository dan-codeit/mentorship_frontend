
import type { ErrorField } from "../types/error.field";

export const validateRequiredFields = (
  fields: Record<string, string>,
  customMessages: Partial<Record<string, string>> = {}
): ErrorField[] => {
  const errors: ErrorField[] = [];

  for (const [field, value] of Object.entries(fields)) {
    if (!value.trim()) {
      errors.push({
        field,
        message: customMessages[field] || `${capitalize(field)} is required`,
      });
    }
  }

  return errors;
};

const capitalize = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1);



