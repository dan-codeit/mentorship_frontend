import React, { useState } from "react";
import Input from "../components/common/Input";


const ProfileUpdate: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
      password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // if (formData.password && formData.password !== formData.confirmPassword) {
    //   setError("Passwords do not match.");
    //   return;
    // }

  
    console.log("Profile updated:", formData);
    setSuccess("Profile updated successfully!");
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Update Profile</h2>

        {error && <div className="text-red-600 mb-4 text-sm">{error}</div>}
        {success && (
          <div className="text-green-600 mb-4 text-sm">{success}</div>
        )}

        <form onSubmit={handleSubmit}>
          <Input
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
          />
          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
          />

          {/* Role Selector */}


          {/* Optional Password Change */}
          {/* <Input
            label="New Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Leave blank to keep current"
          />
          <Input
            label="Confirm New Password"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm new password"
          /> */}

          <button
            type="submit"
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded mt-4"
          >
            Save Changes
          </button>
        </form>
      </div>
    </section>
  );
};

export default ProfileUpdate;
