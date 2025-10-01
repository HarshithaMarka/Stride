import React from 'react';
import { useNavigate } from 'react-router-dom';
import StriveButton from '../../../../components/button/StriveButton';
import heroImage from '../../../../assets/images/hero.png'

// Placeholder Icon Component - We can use a simple SVG or a <div> until a proper icon library is added.
const PlaceholderIcon = ({ children, className }) => (
    <div className={`p-1 ${className}`}>
        {children}
    </div>
);

// Inline SVG Icons (for simplicity, replacing MUI icons)
const DragIndicatorSVG = (props) => (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24">
        <path d="M10 12h4v2h-4zM10 8h4v2h-4zM10 16h4v2h-4zM3 4c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2zM5 20h14V4H5z"/>
    </svg>
);

const GroupWorkSVG = (props) => (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.7-7-4.14-7-8.93 0-.58.07-1.13.19-1.67L8 14v1c0 1.1.9 2 2 2h3.1c1.1 0 2-.9 2-2 0-1.1-.9-2-2-2H9v-2h4c1.1 0 2-.9 2-2 0-1.1-.9-2-2-2h-3V7h2V5h-4C7.01 5 4.5 7.49 4.5 10.5S7.01 16 12 16s7.5-2.99 7.5-5.5-2.5-5.5-7.5-5.5c-2.45 0-4.63 1.19-6 3.03l1.82 1.82c.38-.28.79-.53 1.22-.73V7h2v2h2v2h-2v2h2v2h-2v2h-1z"/>
    </svg>
);

const CheckCircleSVG = (props) => (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
    </svg>
);


// --- Feature Card Component (Helper) ---
const FeatureCard = ({  title, description, animationClass }) => (
    <div 
        className={`group relative ${animationClass}`}
    >
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-25 
                       group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative bg-white shadow-xl rounded-2xl p-8 h-full transform transition-all duration-500 
                       hover:scale-[1.02] hover:-translate-y-1">
            <div className="absolute top-0 right-0 -mt-4 mr-4 w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 
                          rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
            <PlaceholderIcon className="relative z-10 text-transparent bg-gradient-to-br from-indigo-600 to-purple-600 
                                      bg-clip-text text-4xl mb-6 transform transition-transform duration-500 
                                      group-hover:scale-110 group-hover:rotate-3">
                <IconComponent className="w-12 h-12" />
            </PlaceholderIcon>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 relative z-10">{title}</h3>
            <p className="text-gray-600 text-lg leading-relaxed relative z-10">{description}</p>
        </div>
    </div>
);


// --- Feature Section Component ---
const FeatureSection = () => (
    <div className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 via-indigo-50 to-purple-50"></div>
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto mb-16">
                <h2 className="font-bold text-5xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 
                             bg-clip-text text-transparent mb-6 animate-gradient-x">
                    The AgileFlow Difference
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                    Designed for speed and clarity. Focus on what matters with our core features.
                </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
                <FeatureCard 
                    icon={DragIndicatorSVG} 
                    title="Visual Kanban" 
                    description="Drag and drop tasks between To Do, In Progress, and Done columns. See your workflow clearly and eliminate bottlenecks."
                    animationClass="animate-fadeIn animation-delay-100"
                />
                <FeatureCard 
                    icon={GroupWorkSVG} 
                    title="Team Collaboration" 
                    description="Assign tasks, set due dates, and invite members via email. Get everyone on the same page, instantly."
                    animationClass="animate-fadeIn animation-delay-200"
                />
                <FeatureCard 
                    icon={CheckCircleSVG} 
                    title="MVP Simplicity" 
                    description="No complex setup. Start managing projects within minutes. Focus purely on getting tasks completed."
                    animationClass="animate-fadeIn animation-delay-300"
                />
            </div>
        </div>
    </div>
);

// --- Call to Action Section Component ---
const CallToActionSection = () => (
    <div className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800"></div>
        
        {/* Animated background shapes */}
        <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 shadow-2xl">
                <h2 className="font-black text-5xl text-white mb-6 leading-tight">
                    Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200">Stride</span> with your Team?
                </h2>
                <p className="text-2xl text-indigo-100 mb-12 leading-relaxed">
                    Start your free account today—no credit card required.
                </p>
                <StriveButton 
                    variant="contained" 
                    color="secondary" 
                    size="large"
                    onClick={() => console.log('Final CTA clicked')}
                    className="group relative py-6 px-12 text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 
                             hover:from-emerald-500 hover:to-teal-500 text-white rounded-xl transform transition-all 
                             duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl"
                    aria-label="Create your free account"
                >
                    <span className="relative z-10 flex items-center justify-center">
                        Start Managing Projects Free
                        <svg className="w-6 h-6 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" 
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </span>
                </StriveButton>
            </div>
        </div>
    </div>
);


// --- Main Hero Page Component ---
const HeroPage = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-indigo-50 to-white flex flex-col">
            {/* 1. Navigation Header */}
            <header className="w-full p-4 md:p-6 bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-20">
                <nav className="flex justify-between items-center max-w-7xl mx-auto" role="navigation" aria-label="Main navigation">
                    {/* Logo/App Name */}
                    <a 
                        href="/" 
                        className="group text-2xl font-extrabold relative overflow-hidden"
                        aria-label="Stride Home"
                    >
                        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent 
                                     group-hover:animate-gradient-x">
                            S T R I D E
                        </span>
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 
                                     transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                    </a>

                    {/* Login/Signup Buttons */}
                    <div className="space-x-4 flex items-center">
                        <StriveButton 
                            variant="text" 
                            color="primary"
                            onClick={() => navigate('/login')}
                            className="text-indigo-600 hover:text-indigo-700 transition-all duration-300 ease-in-out
                                     hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            aria-label="Log in to your account"
                        >
                            Log In
                        </StriveButton>
                        <StriveButton 
                            variant="contained" 
                            color="primary"
                            onClick={() => console.log('Sign Up clicked')}
                            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 
                                     text-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform 
                                     hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" 
                            aria-label="Create a new account"
                        >
                            Sign Up
                        </StriveButton>
                    </div>
                </nav>
            </header>
            
            {/* 2. Main Hero Content */}
            <main className="flex-grow flex flex-col">
                <div className="relative md:py-15 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 opacity-80"></div>
                    {/* Decorative elements */}
                    <div className="absolute bottom-0 right-0 w-60 h-60 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                    
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:flex md:items-center md:text-left">
                        {/* Text Content - Left Side */}
                        <div className="md:w-1/2 md:pr-12 animate-fadeInLeft">
                            <div className="relative">
                                <h1 className="font-lexend-deca font-black text-5xl md:text-7xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 
                                             bg-clip-text text-transparent leading-tight mb-6 animate-gradient-x relative z-10">
                                    Stride Towards Project Success.
                                </h1>
                                <p className="font-lexend text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                                    AgileFlow: Your collaborative hub for planning, tracking, and managing tasks effortlessly. 
                                    <span className="block mt-2 text-primary-600 font-semibold">Built for small, agile teams.</span>
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                                    <StriveButton 
                                        variant="contained" 
                                        color="primary"
                                        size="large"
                                        onClick={() => console.log('Get Started clicked')}
                                        className="group relative py-4 px-8 text-lg bg-gradient-to-r from-indigo-600 to-purple-600 
                                                 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl 
                                                 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 rounded-xl
                                                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        aria-label="Get started with Stride"
                                    >
                                        <span className="relative z-10">Get Started</span>
                                        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-indigo-600 to-purple-600 
                                                      transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 
                                                      origin-left rounded-xl"></div>
                                    </StriveButton>
                                    <StriveButton 
                                        variant="outlined" 
                                        color="primary"
                                        size="large"
                                        onClick={() => console.log('Learn More clicked')}
                                        className="py-4 px-8 text-lg border-2 border-indigo-500 text-indigo-600 hover:bg-indigo-50 
                                                 rounded-xl transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 
                                                 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 
                                                 focus:ring-indigo-500"
                                        aria-label="Learn more about Stride features"
                                    >
                                        Learn More
                                    </StriveButton>
                                </div>
                            </div>
                        </div>

                        {/* Image/Illustration - Right Side */}
                        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center animate-fadeInRight">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-25 
                                              group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-500 
                                              group-hover:scale-[1.02]">
                                    <div className="h-80 flex items-center justify-center overflow-hidden">
                                        <img 
                                            src={heroImage} 
                                            alt="Project management dashboard visualization" 
                                            className="w-full h-full object-cover transform transition duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. Key Features Section */}
                <FeatureSection />

                {/* 4. Final Call to Action Section */}
                <CallToActionSection />

            </main>
            
            {/* 5. Footer */}
            <footer className="relative w-full py-8 bg-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-between">
                        <div className="text-center md:text-left">
                            <a href="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                                STRIDE
                            </a>
                            <p className="mt-2 text-gray-400">Simple. Collaborative. Agile.</p>
                        </div>
                        
                        <nav className="flex justify-center space-x-6" role="navigation" aria-label="Footer navigation">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a>
                        </nav>
                        
                        <div className="text-center md:text-right">
                            <p className="text-gray-400">
                                &copy; {new Date().getFullYear()} Stride.<br/>All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HeroPage;