import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// CORRECTED: Point this to your actual backend server's port (e.g., 5000)
const API_BASE_URL = 'http://localhost:3000/api/auth';

const SignUpPage = () => {
    const navigate = useNavigate();
    const [signUpData, setSignUpData] = useState({ name: '', email: '', password: '' });

    const [showOtpInput, setShowOtpInput] = useState(false);
    const [userOtp, setUserOtp] = useState('');
    const [resendDisabled, setResendDisabled] = useState(false);

    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
    };
    // 1. SIGN UP ACTION (POST /api/auth/register)
    //    REPLACED LOCAL LOGIC WITH ASYNC API CALL

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setIsLoading(true);

        if (!signUpData.name || !signUpData.email || !signUpData.password) {
            setMessage('Please fill all fields!');
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch(`${API_BASE_URL}/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(signUpData),
            });

            const data = await response.json();

            if (response.status === 201) {
                // SUCCESS: Backend user created and email sent.
                setMessage(data.message || 'Registration successful! OTP sent to your email.');
                setShowOtpInput(true);
                setResendDisabled(true);
                setTimeout(() => setResendDisabled(false), 30000);
            } else {
                // FAILURE: Display error from backend (e.g., user already exists)
                setMessage(data.message || 'Registration failed.');
            }

        } catch (error) {
            setMessage('Network error: Could not connect to the server.');
        } finally {
            setIsLoading(false);
        }
    };

    // -------------------------------------------------------------------
    // 2. VERIFY OTP ACTION (POST /api/auth/verify-otp)
    //    REPLACED LOCAL LOGIC WITH ASYNC API CALL
    // -------------------------------------------------------------------
    const handleOtpVerify = async () => {
        setMessage('');
        setIsLoading(true);

        if (userOtp.length !== 6) {
            setMessage('OTP must be 6 digits.');
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch(`${API_BASE_URL}/verify-otp`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: signUpData.email,
                    otp: userOtp
                }),
            });

            const data = await response.json();

            if (response.status === 200) {
                // SUCCESS: Verification successful, token received.
                setMessage('Registration Successful! Redirecting to login...');

                // CRUCIAL: Save the token (Feature TCR-03)
                localStorage.setItem('authToken', data.data.token);
                navigate('/login'); // Redirect

            } else {
                // FAILURE: Invalid/expired OTP
                setMessage(data.message || 'Invalid or expired OTP, please try again.');
            }

        } catch (error) {
            setMessage('Network error during verification.');
        } finally {
            setIsLoading(false);
        }
    };

    // -------------------------------------------------------------------
    // 3. RESEND OTP ACTION (POST /api/auth/resend-otp)
    //    REPLACED LOCAL LOGIC WITH ASYNC API CALL
    // -------------------------------------------------------------------
    const handleResend = async () => {
        setMessage('Requesting new code...');
        setResendDisabled(true);

        try {
            // This endpoint must be implemented in your auth routes/controller
            const response = await fetch(`${API_BASE_URL}/resend-otp`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: signUpData.email }),
            });

            const data = await response.json();

            if (response.status === 200) {
                setMessage(data.message || 'New OTP has been sent to your email.');
                setUserOtp('');
                setTimeout(() => setResendDisabled(false), 30000);
            } else {
                setMessage(data.message || 'Failed to resend OTP.');
                setResendDisabled(false);
            }
        } catch (error)
        {
            setMessage('Network error: Could not resend code.');
            setResendDisabled(false)
        }
    };
    // JSX RETURN BLOCK (MODIFIED TO USE MESSAGE/LOADING STATES)
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-indigo-50 to-white flex flex-col">

            <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="relative w-full max-w-md">
                    {/* Background styling */}
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

                            {/* Message Display (NEW) */}
                            {message && (
                                <div className={`mb-4 p-3 rounded-xl text-center font-medium text-sm ${message.includes('success') || message.includes('OTP sent') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                    {message}
                                </div>
                            )}

                            <form className="space-y-6" onSubmit={handleSubmit}>

                                {/* Full Name (Hide after registration) */}
                                {!showOtpInput && (
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
                                )}

                                {/* Email (Disable after registration) */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        value={signUpData.email}
                                        onChange={handleChange}
                                        disabled={showOtpInput} // Disable editing after OTP is sent
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                                        placeholder="Enter your email"
                                    />
                                </div>

                                {/* Password (Hide after registration) */}
                                {!showOtpInput && (
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
                                )}

                                {/* OTP Verification Fields (Visible only after successful sign up) */}
                                {showOtpInput && (
                                    <div className="space-y-4">
                                        <label htmlFor="otp" className="block text-sm font-medium text-gray-700">Enter OTP</label>
                                        <input
                                            id="otp"
                                            type="text"
                                            value={userOtp}
                                            onChange={(e) => setUserOtp(e.target.value)}
                                            maxLength="6"
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                                            placeholder="6-digit OTP"
                                        />
                                        <div className="flex justify-between mt-2 items-center space-x-2">
                                            <button
                                                type="button"
                                                onClick={handleOtpVerify}
                                                disabled={isLoading}
                                                className="w-1/2 px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors disabled:bg-indigo-400"
                                            >
                                                {isLoading ? 'Verifying...' : 'Verify OTP'}
                                            </button>
                                            <button
                                                type="button"
                                                onClick={handleResend}
                                                disabled={resendDisabled || isLoading}
                                                className={`w-1/2 px-4 py-2 rounded-xl text-white ${resendDisabled || isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700 transition-colors'}`}
                                            >
                                                {resendDisabled ? 'Wait 30s...' : 'Resend OTP'}
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {/* Sign Up Button (Hidden after registration) */}
                                {!showOtpInput && (
                                    <button type="submit"
                                        disabled={isLoading}
                                        className="group relative w-full py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 transform hover:-translate-y-0.5"
                                    >
                                        {isLoading ? 'Processing...' : 'Sign Up'}
                                    </button>
                                )}
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
