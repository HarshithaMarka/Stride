import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StriveButton from '../../../components/button/StriveButton';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

const LoginPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login submitted:', formData);
        // TODO: Implement actual login logic
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-indigo-50 to-white flex flex-col">
            <Header />

            {/* Main Content */}
            <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="relative w-full max-w-md">
                    {/* Background Effects */}
                    <div className="absolute -top-20 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
                    <div className="absolute -bottom-20 right-0 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
                    
                    {/* Login Form Card */}
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-25 
                                    group-hover:opacity-75 transition duration-1000"></div>
                        <div className="relative bg-white shadow-xl rounded-2xl p-8 sm:p-10">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 
                                             bg-clip-text text-transparent">
                                    Welcome Back
                                </h2>
                                <p className="mt-2 text-gray-600">Sign in to continue to your workspace</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email Address
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm 
                                                 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                                        placeholder="Enter your email"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm 
                                                 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                                        placeholder="Enter your password"
                                    />
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input
                                            id="remember-me"
                                            name="remember-me"
                                            type="checkbox"
                                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                        />
                                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                                            Remember me
                                        </label>
                                    </div>

                                    <div className="text-sm">
                                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>

                                <div>
                                    <StriveButton
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        className="group relative w-full py-3 px-4 border border-transparent text-sm font-medium 
                                                 rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 
                                                 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 
                                                 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 
                                                 transform hover:-translate-y-0.5"
                                    >
                                        Sign In
                                    </StriveButton>
                                </div>
                            </form>

                            <div className="mt-6 text-center">
                                <p className="text-sm text-gray-600">
                                    Don't have an account?{' '}
                                    <button
                                        onClick={() => navigate('/signup')}
                                        className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-200"
                                    >
                                        Sign up now
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default LoginPage;