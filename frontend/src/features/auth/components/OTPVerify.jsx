import React, { useState } from 'react';

const OTPVerify = ({ onVerify }) => {
  const [otp, setOtp] = useState('');

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.length === 6) {
      alert('OTP Verified Successfully!');
      onVerify(); // callback to close OTP or continue flow
    } else {
      alert('Please enter a 6-digit OTP');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="bg-white shadow-xl rounded-2xl p-8 sm:p-10 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4 text-indigo-600">OTP Verification</h2>
        <p className="text-center text-gray-600 mb-6">
          Enter the 6-digit OTP sent to your email
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={otp}
            onChange={handleChange}
            maxLength={6}
            className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter OTP"
          />
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default OTPVerify;