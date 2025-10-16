import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DashboardPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    // If token missing → redirect to login
    if (!token) {
      navigate("/login");
      return;
    }

    // Fetch protected dashboard data
    const fetchDashboard = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/users/dashboard", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMessage(res.data.msg);

        // If you stored user details earlier
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (err) {
        console.error("Dashboard access failed:", err);
        localStorage.removeItem("token");
        navigate("/login");
      }
    };

    fetchDashboard();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-white">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-11/12 max-w-lg text-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Dashboard
        </h1>

        {user ? (
          <>
            <p className="text-gray-700 mb-2">
              <strong>Welcome,</strong> {user.email}
            </p>
            <p className="text-gray-600">{message}</p>

            <button
              onClick={handleLogout}
              className="mt-6 px-6 py-2 text-white bg-red-500 hover:bg-red-600 rounded-lg shadow-md transition duration-300"
            >
              Logout
            </button>
          </>
        ) : (
          <p className="text-gray-500">Loading user details...</p>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
