import  { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Input from "../components/common/Input";
import ErrorMessage from "../components/messages/ErrorMessage";
import { loginUser } from "../auth.login/Login.auth";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  role: string;
  exp: number;
  [key: string]: unknown;
}

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Email and password are required.");
      return;
    }

    const result = await loginUser(formData.email, formData.password);

    if (!result.token) {
      setError(result.message || "Login failed. Please try again.");
      return;
    }

    try {
      localStorage.setItem("authToken", result.token);

      if (result.user) {
        localStorage.setItem("user", JSON.stringify(result.user));
      }

      const decoded: DecodedToken = jwtDecode(result.token);

      const roleRedirects: Record<string, string> = {
        mentee: "/mentee-dashboard",
        mentor: "/mentor-dashboard",
      };

      const redirectPath = roleRedirects[decoded.role];

      if (redirectPath) {
        navigate(redirectPath);
      } else {
        setError("Unauthorized role.");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("Login error:", err.message);
        setError("Login failed. Please try again.");
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form onSubmit={handleSubmit}>
          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          <Input
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />

          <ErrorMessage message={error || ""} />

          <button
            type="submit"
             //disabled={loading}
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded mt-4"
          >
            Login
          </button>
        </form>

        <div className="flex justify-between mt-4 text-sm text-cyan-600">
          <Link to="/password-reset" className="hover:underline">
            Forgot Password?
          </Link>
          <Link to="/signup" className="hover:underline">
            Create Account
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
