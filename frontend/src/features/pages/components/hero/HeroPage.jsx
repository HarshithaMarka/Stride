import React from "react";
import { useNavigate } from "react-router-dom";
import StriveButton from "../../../../components/button/StriveButton";
import heroImage from "../../../../assets/images/hero.png"; // Ensure this is the actual Kanban board image
import strideLogo from "../../../../assets/images/stride.png"; // Ensure this is the actual logo image

// Inline SVG Icons (for simplicity, replacing MUI icons and matching the visual style)
const DragIndicatorSVG = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24">
    <path d="M10 12h4v2h-4zM10 8h4v2h-4zM10 16h4v2h-4zM3 4c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2zM5 20h14V4H5z" />
  </svg>
);

const GroupWorkSVG = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.7-7-4.14-7-8.93 0-.58.07-1.13.19-1.67L8 14v1c0 1.1.9 2 2 2h3.1c1.1 0 2-.9 2-2 0-1.1-.9-2-2-2H9v-2h4c1.1 0 2-.9 2-2 0-1.1-.9-2-2-2h-3V7h2V5h-4C7.01 5 4.5 7.49 4.5 10.5S7.01 16 12 16s7.5-2.99 7.5-5.5-2.5-5.5-7.5-5.5c-2.45 0-4.63 1.19-6 3.03l1.82 1.82c.38-.28.79-.53 1.22-.73V7h2v2h2v2h-2v2h2v2h-2v2h-1z" />
  </svg>
);

const CheckCircleSVG = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
  </svg>
);

// --- Feature Card Component (Helper) ---
const FeatureCard = ({ icon: Icon, title, description, animationClass }) => (
  <div className={`group relative ${animationClass}`}>
    <div
      className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-md opacity-25
                 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"
    ></div>
    <div
      className="relative bg-white shadow-xl rounded-2xl p-8 h-full transform transition-all duration-500
                 hover:scale-[1.03] hover:-translate-y-2 flex flex-col items-center text-center"
    >
      <div
        className="text-white bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full p-4 mb-6
                   transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6
                   shadow-lg"
      >
        <Icon className="w-8 h-8" /> {/* Adjusted icon size */}
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-3 relative z-10">
        {title}
      </h3>
      <p className="text-gray-600 text-lg leading-relaxed relative z-10">
        {description}
      </p>
    </div>
  </div>
);

// --- Feature Section Component ---
const FeatureSection = () => (
  <div className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-white via-indigo-50 to-purple-50">
    {/* Decorative elements */}
    <div className="absolute top-1/4 left-0 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
    <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-3xl mx-auto mb-16">
        <h2
          className="font-lexend-deca font-extrabold text-4xl md:text-5xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600
                     bg-clip-text text-transparent mb-6 animate-gradient-x leading-tight"
        >
          Streamline Your Workflow
        </h2>
        <p className="text-xl text-gray-700 leading-relaxed font-lexend">
          Designed for clarity and efficiency, Stride provides the core features
          your team needs to succeed.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        <FeatureCard
          icon={DragIndicatorSVG}
          title="Visual Kanban Boards"
          description="Drag and drop tasks between 'To Do', 'In Progress', and 'Done'. See your progress at a glance."
          animationClass="animate-fadeIn animation-delay-100"
        />
        <FeatureCard
          icon={GroupWorkSVG}
          title="Seamless Collaboration"
          description="Easily invite team members, assign tasks, and keep everyone aligned on project goals."
          animationClass="animate-fadeIn animation-delay-200"
        />
        <FeatureCard
          icon={CheckCircleSVG}
          title="Effortless Task Management"
          description="Create, edit, and update tasks with titles, descriptions, and due dates in a few clicks."
          animationClass="animate-fadeIn animation-delay-300"
        />
      </div>
    </div>
  </div>
);

// --- Call to Action Section Component ---
const CallToActionSection = ({ navigate }) => (
  <div className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-indigo-700 via-purple-700 to-indigo-900">
    {/* Animated background shapes */}
    <div className="absolute inset-0">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
    </div>

    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 md:p-12 shadow-2xl border border-white/20">
        <h2 className="font-lexend-deca font-black text-4xl md:text-5xl text-white mb-6 leading-tight">
          Ready to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200">
            Stride Ahead
          </span>{" "}
          with your Team?
        </h2>
        <p className="text-xl md:text-2xl text-indigo-100 mb-12 leading-relaxed font-lexend">
          Start your free account today—no credit card required.
        </p>
        <StriveButton
          variant="contained"
          color="secondary"
          onClick={() => navigate('/signup')}
          className="group relative py-5 px-10 text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400
                     hover:from-emerald-500 hover:to-teal-500 text-white rounded-xl transform transition-all
                     duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-4
                     focus:ring-emerald-300 focus:ring-opacity-75 overflow-hidden"
          aria-label="Create your free account"
        >
          <span className="relative z-10 flex items-center justify-center">
            Get Started Free
            <svg
              className="w-6 h-6 ml-3 transform transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-white flex flex-col font-sans">
      {/* 1. Navigation Header */}
      <header className="w-full p-4 md:p-6 bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-20">
        <nav
          className="flex justify-between items-center max-w-7xl mx-auto"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo/App Name */}
          <a
            href="/"
            className="group flex items-center"
            aria-label="Stride Home"
          >
            <img
              src={strideLogo}
              alt="Stride Logo"
              className="h-10 md:h-12 w-auto rounded-2xl transform transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Login/Signup Buttons */}
          <div className="space-x-3 md:space-x-4 flex items-center">
            <StriveButton
              variant="text"
              color="primary"
              onClick={() => navigate("/login")}
              className="text-gray-700 hover:text-indigo-600 font-medium transition-all duration-300 ease-in-out
                         hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 rounded-lg py-2 px-4"
              aria-label="Log in to your account"
            >
              Log In
            </StriveButton>
            <StriveButton
              variant="contained"
              color="primary"
              onClick={() => navigate('/signup')}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700
                         text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform
                         hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 rounded-xl py-2.5 px-6"
              aria-label="Create a new account"
            >
              Sign Up
            </StriveButton>
          </div>
        </nav>
      </header>

      {/* 2. Main Hero Content */}
      <main className="flex-grow flex flex-col">
        <div className="relative pt-16 pb-20 md:pt-16 md:pb-24 overflow-hidden"> {/* Adjusted padding */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 opacity-80"></div>
          {/* Decorative elements */}
          <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-300 rounded-full filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>


          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:flex md:items-center md:text-left">
            {/* Text Content - Left Side */}
            <div className="md:w-1/2 md:pr-12 animate-fadeInLeft">
              <h1
                className="font-extrabold text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600
                           bg-clip-text text-transparent leading-tight mb-5 animate-gradient-x relative z-10" // Reduced text size and margin
              >
                Organize. Track. Achieve. <br className="hidden md:block" /> Stride Ahead with Your Team.
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-7 leading-relaxed font-normal"> {/* Reduced text size and margin */}
                Effortless project management for small to mid-sized teams.
                <span className="block mt-2 font-medium text-gray-800">
                  Focus on what matters, we'll handle the rest.
                </span>
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <StriveButton
                  variant="contained"
                  color="primary"
                  onClick={() => navigate('/signup')}
                  className="group relative py-3.5 px-8 text-lg bg-gradient-to-r from-indigo-500 to-purple-600
                             hover:from-indigo-600 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl
                             transition-all duration-300 ease-in-out transform hover:-translate-y-1 rounded-xl
                             focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 overflow-hidden"
                  aria-label="Get started with Stride"
                >
                  <span className="relative z-10">Get Started - It's Free!</span>
                </StriveButton>
                <StriveButton
                  variant="outlined"
                  color="primary"
                  onClick={() => console.log("Watch Demo clicked")}
                  className="py-3.5 px-8 text-lg border-2 border-indigo-400 text-indigo-600 hover:bg-indigo-50
                             rounded-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1
                             shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2
                             focus:ring-indigo-400 font-medium"
                  aria-label="Watch a demo of Stride"
                >
                  Watch Demo
                </StriveButton>
              </div>
            </div>

            {/* Image/Illustration - Right Side */}
            <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center animate-fadeInRight"> {/* Adjusted top margin */}
              <div className="relative group w-full max-w-lg">
                <div
                  className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur opacity-30
                             group-hover:opacity-70 transition duration-1000 group-hover:duration-200"
                ></div>
                <div
                  className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform transition duration-500
                             group-hover:scale-[1.01] border border-gray-100"
                >
                  <img
                    src={heroImage}
                    alt="Project management dashboard visualization"
                    className="w-full h-auto object-cover transform transition duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Key Features Section */}
        <FeatureSection />

        {/* 4. Final Call to Action Section */}
        <CallToActionSection navigate={navigate} /> {/* Pass navigate prop */}
      </main>

      {/* 5. Footer */}
      <footer className="relative w-full py-8 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-between">
            <div className="text-center md:text-left">
              <a
                href="/"
                className="text-3xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
              >
                STRIDE
              </a>
              <p className="mt-2 text-gray-400 text-sm">
                Simple. Collaborative. Agile.
              </p>
            </div>

            <nav
              className="flex justify-center space-x-6"
              role="navigation"
              aria-label="Footer navigation"
            >
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
              >
                Contact
              </a>
            </nav>

            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Stride.
                <br />
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HeroPage;