


type SuccessMessageProps = {
  message: string;
};

const SuccessMessage: React.FC<SuccessMessageProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="text-green-600 mb-4 text-center text-sm">{message}</div>
  );
};

export default SuccessMessage