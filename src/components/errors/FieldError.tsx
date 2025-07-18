import type { ErrorField } from "../../config/types/error.field";

type FieldErrorProps = {
  errors: ErrorField[];
  field: string;
};

const FieldError: React.FC<FieldErrorProps> = ({ errors, field }) => {
  const fieldErrors = errors.filter((err) => err.field === field);

  if (fieldErrors.length === 0) return null;

  return (
    <>
      {fieldErrors.map((err) => (
        <p
          key={`${err.field}-${err.message}`}
          className="text-red-600 text-sm mt-1"
        >
          {err.message}
        </p>
      ))}
    </>
  );
};

export default FieldError;
