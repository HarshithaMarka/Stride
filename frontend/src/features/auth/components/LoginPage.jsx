import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StriveButton from '../../../components/button/StriveButton';

const LoginPage = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', loginData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-indigo-50 to-white flex flex-col items-center justify-center">
      <div
        className="bg-white shadow-xl rounded-2xl p-8 sm:p-10 w-full max-w-md transition-transform duration-700"
      >
        <h2 className="text-3xl font-bold text-center mb-4 text-indigo-600">Welcome Back</h2>
        <p className="text-gray-600 text-center mb-6">Sign in to continue</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            value={loginData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            value={loginData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <StriveButton type="submit" fullWidth>Sign In</StriveButton>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <button
            onClick={() => navigate('/signup')}
            className="text-indigo-600 font-medium hover:text-indigo-500"
          >
            Sign up now
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;