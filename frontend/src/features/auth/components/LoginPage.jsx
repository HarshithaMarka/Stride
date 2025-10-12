import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import StriveButton from '../../../components/button/StriveButton';
import Header from '../../../components/Header/Header';

const LoginPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const res = await axios.post(
                'http://localhost:3000/api/users/login',
                formData
            );

            // Save JWT to localStorage
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));

            // Redirect to dashboard
            navigate('/dashboard');
        } catch (err) {
            console.error('Login failed:', err);
            setError(
                err.response?.data?.msg || 'Login failed. Please check credentials.'
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-indigo-50 to-white flex flex-col">
            <Header />
            <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="relative w-full max-w-md">
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

                            {error && (
                                <p className="text-red-600 text-sm text-center">{error}</p>
                            )}

                            <div>
                                <StriveButton
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    disabled={loading}
                                    className="group relative w-full py-3 px-4 border border-transparent text-sm font-medium 
                                        rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 
                                        hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 
                                        focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 
                                        transform hover:-translate-y-0.5"
                                >
                                    {loading ? 'Signing In...' : 'Sign In'}
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
            </main>

            <footer className="py-4 text-center text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Stride. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LoginPage;
