import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Input from "../components/common/Input";
import { inputFields } from "../data/formData";
import Roller from "../components/loader/Roller";
import FieldError from "../components/errors/FieldError";
import FormError from "../components/errors/FormError";
import SuccessMessage from "../components/messages/successMessage";
import { validateRequiredFields } from "../config/validations/validateFormField";
import { validatePasswordMatch } from "../config/validations/validatePasswordMatch";
import type { ErrorField } from "../config/types/error.field";
import type { resError } from "../config/types/res.error";
import loadingEffect from "../config/loader_effect/loadingEffect";


const Signup: React.FC = () => {
  const navigate = useNavigate();
  const baseUrl =
    import.meta.env.VITE_CLOUD_URL || import.meta.env.VITE_LOCAL_URL;

  const [formData, setFormData] = useState({
    email: "",
    role: "mentee",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ field: string; message: string }[]>(
    []
  );
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess("");
    setErrors([]);

    const { email, password, confirmPassword, role } = formData;

    const InputErrors: ErrorField[] = validateRequiredFields(
      { email, password, confirmPassword },
      {
        email: "Email is required",
        password: "Password is required",
        confirmPassword: "Please confirm your password",
      }
    );

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
      InputErrors.push({ field: "email", message: "Invalid email address" });
    }

    if (password.length < 6) {
      InputErrors.push({
        field: "password",
        message: "Password must be at least 6 characters",
      });
    }

    InputErrors.push(...validatePasswordMatch(password, confirmPassword));

    if (!["mentee", "mentor"].includes(role)) {
      InputErrors.push({
        field: "role",
        message: "Invalid role selected",
      });
    }

    if (InputErrors.length > 0) {
      setErrors(InputErrors);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${baseUrl}/users/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) {
        setSuccess("");

        if (data.errors && Array.isArray(data.errors)) {
          const formattedErrors = data.errors.map((err: resError) => ({
            field: err.path,
            message: err.msg,
          }));
          setErrors(formattedErrors);
        } else {
          setErrors([
            {
              field: "form",
              message: data.message || "Signup failed",
            },
          ]);
        }

        setLoading(false);
        return;
      }

      setSuccess("Account created successfully!");
      navigate("/login");
      setErrors([]);
    } catch (err) {
      console.error("Signup error:", err);
      setErrors([
        {
          field: "form",
          message: "Error in registering. Please try again later.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="bg-blue-600 m-auto min-h-dvh max-w-dvw flex flex-col  gap-6 text-gray-800 xl:w-1/2">
        <section className="min-h-dvh text-gray-800 bg-[url('/images/cover-mountain.jpg')] bg-cover bg-center bg-no-repeat bg-cyan-700 bg-blend-overlay bg-opacity-70 py-10 flex justify-center items-center">
          <section className="flex items-center justify-center w-full  px-4">
            <div className="bg-gray-100  p-8 rounded mt-20 mb-20 shadow-md w-full max-w-md">
              <h2 className="text-2xl font-bold text-center mb-6">
                Create an Account
              </h2>

              <SuccessMessage message={success} />
              <FormError errors={errors} />

              <form onSubmit={handleSubmit} noValidate>
                {inputFields.map((field) => {
                  if (field.type === "select") {
                    return (
                      <div key={field.name} className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">
                          {field.label}
                        </label>

                        <select
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        >
                          <option value="mentee">Mentee</option>
                          <option value="mentor">Mentor</option>
                        </select>
                        <FieldError errors={errors} field={field.name} />
                      </div>
                    );
                  }

                  return (
                    <div key={field.name}>
                      <Input
                        label={field.label}
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        placeholder={`Enter your ${field.label.toLowerCase()}`}
                      />
                      <FieldError errors={errors} field={field.name} />
                    </div>
                  );
                })}

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full flex items-center h-8 justify-center bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-6 px-4 rounded mt-4 ${loadingEffect(loading)}`}
                >
                  {loading ? <Roller /> : "Sign up"}
                </button>
              </form>

              <div className="text-sm text-center mt-4">
                Already have an account?
                <Link to="/login" className="text-cyan-600 hover:underline">
                  Login here
                </Link>
              </div>
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default Signup;
