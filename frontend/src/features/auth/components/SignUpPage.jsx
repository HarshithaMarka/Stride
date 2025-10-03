import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StriveButton from '../../../components/button/StriveButton';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [signUpData, setSignUpData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign-Up submitted:', signUpData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50 to-white flex flex-col items-center justify-center">
      <div
        className="bg-white shadow-xl rounded-2xl p-8 sm:p-10 w-full max-w-md transition-transform duration-700"
      >
        <h2 className="text-3xl font-bold text-center mb-4 text-green-600">Create Account</h2>
        <p className="text-gray-600 text-center mb-6">Sign up to start using Stride</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            type="text"
            placeholder="Name"
            required
            value={signUpData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            value={signUpData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            value={signUpData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <StriveButton type="submit" fullWidth color="success">Sign Up</StriveButton>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <button
            onClick={() => navigate('/login')}
            className="text-green-600 font-medium hover:text-green-500"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;