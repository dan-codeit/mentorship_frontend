import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Input from "../components/common/Input";

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

  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const { email, password, confirmPassword, role } = formData;

    if (!email || !password || !confirmPassword || !role) {
      setError("All fields are required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!["mentee", "mentor"].includes(role)) {
      setError("Invalid role selected");
      return;
    }

    try {
      const response = await fetch(`${baseUrl}/users/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Signup failed");
        return;
      }

      navigate("/login");
    } catch (err) {
      console.error("Signup error:", err);
      setError("Something went wrong. Please try again later.");
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

              {error && (
                <div className="text-red-600 mb-4 text-center text-sm">
                  {error}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <Input
                  label="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />

                {/* Role Selector */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-1">
                    Role
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  >
                    <option value="mentee">Mentee</option>
                    <option value="mentor">Mentor</option>
                  </select>
                </div>

                <Input
                  label="Password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                />
                <Input
                  label="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Re-enter password"
                />

                <button
                  type="submit"
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded mt-4"
                >
                  Sign Up
                </button>
              </form>
              <div className="text-sm text-center mt-4">
                Already have an account?{" "}
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
