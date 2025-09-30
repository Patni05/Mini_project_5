import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function SignUp() {
  const primaryColor = "#ff4d2d";
  const hoverColor = "#e64323";
  const bgColor = "#fff9f6";
  const borderColor = "#ddd";

  const [showPassword, setShowPassword] = useState(false);
  const [role,setRole] = useState("user");

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-4"
      style={{ backgroundColor: bgColor }}
    >
      <div
        className="bg-white rounded-xl shadow-lg w-full max-w-md p-8 border"
        style={{ borderColor: borderColor }}
      >
        <h1 className="text-3xl font-bold mb-6" style={{ color: primaryColor }}>
          Local Basket
        </h1>

        <form className="space-y-4">
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

             {/* phone */}
          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700">Mobile</label>
            <input
              type="text"
              placeholder="Enter your Phone Number"
              className="border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col relative">
            <label className="mb-1 font-semibold text-gray-700">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="border rounded-md p-3 pr-10 focus:outline-none cursor:pointer focus:ring-2 focus:ring-orange-400"
            />
            <span
              className="absolute right-3 top-10 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

{/* Role */}
<div className="flex flex-col mt-4">
  <label className="mb-1 font-semibold text-gray-700">Role</label>
  <div className="flex gap-2">
    {["user", "owner", "deliveryBoy"].map((r) => (
      <button
        key={r}
        type="button"
        className="flex-1 border rounded-lg px-3 py-2 text-center font-medium transition-colors cursor-pointer"
        onClick={() => setRole(r)}
        style={
          role === r
            ? { backgroundColor: primaryColor, color: "white" }
            : { border: `1px solid ${primaryColor}`, color: "#333" }
        }
      >
        {r}
      </button>
    ))}
  </div>
</div>














          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 mt-4 rounded-md text-white font-semibold transition-colors"
            style={{ backgroundColor: primaryColor }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = hoverColor)}
            onMouseLeave={(e) => (e.target.style.backgroundColor = primaryColor)}
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <span className="text-orange-500 font-semibold cursor-pointer hover:underline">
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
