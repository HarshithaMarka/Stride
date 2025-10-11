import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StriveButton from '../../../components/button/StriveButton';


const SignUpPage = () => {
  const navigate = useNavigate();
  const [signUpData, setSignUpData] = useState({ name: '', email: '', password: '' });
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [userOtp, setUserOtp] = useState('');
  const [resendDisabled, setResendDisabled] = useState(false);

  const handleChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!signUpData.name || !signUpData.email || !signUpData.password) {
      alert('Please fill all fields!');
      return;
    }
    // Generate OTP
    const otpValue = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otpValue);
    setShowOtpInput(true);
    alert(`OTP sent to ${signUpData.email}: ${otpValue}`);
    setResendDisabled(true);
    setTimeout(() => setResendDisabled(false), 30000);
  };

  const handleOtpVerify = () => {
    if (userOtp === generatedOtp) {
      alert('Registration Successful! 🎉');
      // You can reset form or redirect
      navigate('/login');
    } else {
      alert('Invalid OTP, please try again.');
    }
  };

  const handleResend = () => {
    const otpValue = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otpValue);
    setUserOtp('');
    alert(`New OTP sent to ${signUpData.email}: ${otpValue}`);
    setResendDisabled(true);
    setTimeout(() => setResendDisabled(false), 30000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-indigo-50 to-white flex flex-col">
      
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="relative w-full max-w-md">
          <div className="absolute -top-20 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
          <div className="absolute -bottom-20 right-0 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-25 transition duration-1000"></div>
            <div className="relative bg-white shadow-xl rounded-2xl p-8 sm:p-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Create Account
                </h2>
                <p className="mt-2 text-gray-600">Sign up to start using Stride</p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={signUpData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={signUpData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={signUpData.password}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                    placeholder="Create a password"
                  />
                </div>

                {/* OTP input inside the same card */}
                {showOtpInput && (
                  <div>
                    <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mt-4">Enter OTP</label>
                    <input
                      id="otp"
                      type="text"
                      value={userOtp}
                      onChange={(e) => setUserOtp(e.target.value)}
                      maxLength="6"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                      placeholder="6-digit OTP"
                    />
                    <div className="flex justify-between mt-2 items-center">
                      <button
                        type="button"
                        onClick={handleOtpVerify}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors"
                      >
                        Verify OTP
                      </button>
                      <button
                        type="button"
                        onClick={handleResend}
                        disabled={resendDisabled}
                        className={`px-4 py-2 rounded-xl text-white ${resendDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700 transition-colors'}`}
                      >
                        {resendDisabled ? 'Wait 30s...' : 'Resend OTP'}
                      </button>
                    </div>
                  </div>
                )}

                <StriveButton type="submit" variant="contained" color="primary" fullWidth className="group relative w-full py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 transform hover:-translate-y-0.5">
                  Sign Up
                </StriveButton>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Already have an account?{' '}
                  <button
                    onClick={() => navigate('/login')}
                    className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-200"
                  >
                    Sign in
                  </button>
                </p>
              </div>

            </div>
          </div>
        </div>
      </main>

      <footer className="py-4 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Stride. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SignUpPage;