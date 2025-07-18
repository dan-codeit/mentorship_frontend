
type FormErrorProps = {
  errors: { field: string; message: string }[];
};

const FormError: React.FC<FormErrorProps> = ({ errors }) => {
  const globalErrors = errors.filter((err) => err.field === "form");

  if (globalErrors.length === 0) return null;

  return (
    <div className="text-red-600 mb-2 text-center text-sm">
      {globalErrors.map((err, idx) => (
        <p key={idx}>{err.message}</p>
      ))}
    </div>
  );
};

export default FormError;
