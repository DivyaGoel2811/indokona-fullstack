import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userType, setUserType] = useState("retailer");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (userType === "admin") {
      navigate("/admin");
    } else if (userType === "distributor") {
      navigate("/distributor");
    } else {
      navigate("/retailer");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center text-indigo-600">🔐 Login Panel</h2>
        <select
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
          className="w-full p-2 border mb-4 rounded"
        >
          <option value="admin">Admin</option>
          <option value="distributor">Distributor</option>
          <option value="retailer">Retailer</option>
        </select>
        <button
          onClick={handleLogin}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded font-semibold"
        >
          Login as {userType.charAt(0).toUpperCase() + userType.slice(1)}
        </button>
      </div>
    </div>
  );
};

export default Login;
