import React from "react";

const PasswordResetSent: React.FC = () => {
  return (

    <section className="m-auto flex min-h-screen items-center  bg-gray-700 xl:w-1/2">
    <div className="max-w-80 mx-auto mt-20 p-6 rounded shadow-md bg-white">
      <h2 className="text-2xl text-center font-bold mb-4 bg-cyan-600 text-white p-2 rounded">
        Email Sent
      </h2>

      <p className="text-center text-gray-700">
        If an account with that email exists, a password reset link has been
        sent. Please check your inbox.
      </p>
    </div>

    </section>
  );
};

export default PasswordResetSent;
