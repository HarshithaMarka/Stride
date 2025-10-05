import React from 'react';
import Header from '../../../../components/Header/Header';
import StriveButton from '../../../../components/button/StriveButton';
import Footer from '../../../../components/Footer/Footer';

const Dashboard = () => {
    // Dummy data for demonstration
    const teams = [
        { id: 1, name: 'Tiestn Colt', membersCount: 10, status: 'On Track', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3276&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 2, name: 'Teant Guty', membersCount: 2, status: 'On Track', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 3, name: 'Miopro Pottat', membersCount: 1, status: 'On Track', avatar: 'https://images.unsplash.com/photo-1507003211169-e69fe1c5a3b2?q=80&w=3334&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 4, name: 'Ungyeib Penlw', membersCount: 1, status: 'At Risk', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 5, name: 'Naip Tlaats', membersCount: 3, status: 'On Track', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29329?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 6, name: 'Broen Pipias', membersCount: 3, status: 'At Risk', avatar: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4cf868?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 7, name: 'Vetien O Malxt', membersCount: 3, status: 'At Risk', avatar: 'https://images.unsplash.com/photo-1531746020795-81925256797d?q=80&w=3436&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 8, name: 'Tfanut & How', membersCount: 3, status: 'On Track', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=3322&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDBob3Rby1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ];

    const recentActivity = [
        { id: 1, user: 'Doans Narrid', action: 'Completed "Design mockups"', time: '2 mins ago', avatar: 'https://images.unsplash.com/photo-1508214751196-cdfd462ec1e2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 2, user: 'Penne Conoilley', action: 'Redid task', time: '12/03/23', avatar: 'https://images.unsplash.com/photo-1487412720515-bb473b640827?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ];

    const yourFocus = [
        { id: 1, task: 'Review UI/UX Mockups', count: '10/3' },
        { id: 2, task: 'Write API Mockups', count: '10/9' },
        { id: 3, task: 'Write API Documentation', count: '10/9' },
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />

            <main className="flex-grow p-6 lg:p-10">
                <div className="max-w-7xl mx-auto">
                    {/* Welcome Section */}
                    <div className="mb-8">
                        <h1 className="text-2xl font-semibold text-gray-800">Welcome Back, <span className="text-indigo-600">[User Name]</span></h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {/* Quick Actions */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h2>
                            <div className="space-y-4">
                                <StriveButton variant="contained" color="primary" fullWidth className="py-3 text-base rounded-xl">
                                    + Create New Team
                                </StriveButton>
                                <StriveButton variant="contained" color="secondary" fullWidth className="py-3 text-base rounded-xl">
                                    + Create New Project
                                </StriveButton>
                            </div>
                        </div>

                        {/* Your Teams & Projects */}
                        <div className="md:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-lg font-semibold text-gray-800 mb-4">Your Teams & Projects</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {teams.map((team) => (
                                    <div key={team.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                                        <img src={team.avatar} alt={team.name} className="w-12 h-12 rounded-full mb-2 object-cover" />
                                        <p className="font-medium text-gray-900">{team.name}</p>
                                        <p className="text-sm text-gray-500">{team.membersCount} Members</p>
                                        <span className={`mt-2 px-3 py-1 text-xs font-semibold rounded-full 
                                                ${team.status === 'On Track' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                            {team.status}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <div className="text-center mt-6">
                                <StriveButton variant="outlined" color="primary" className="py-2 px-6 rounded-xl">
                                    Browse All Projects
                                </StriveButton>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-6">
                        {/* Recent Activity */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 md:col-span-2">
                            <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h2>
                            <div className="space-y-4">
                                {recentActivity.map((activity) => (
                                    <div key={activity.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                                        <img src={activity.avatar} alt={activity.user} className="w-10 h-10 rounded-full object-cover" />
                                        <div className="flex-grow">
                                            <p className="font-medium text-gray-900">{activity.user}</p>
                                            <p className="text-sm text-gray-600">{activity.action}</p>
                                        </div>
                                        <span className="text-xs text-gray-500">{activity.time}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Your Focus */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-lg font-semibold text-gray-800 mb-4">Your Focus</h2>
                            <div className="space-y-3">
                                {yourFocus.map((focus) => (
                                    <div key={focus.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                        <p className="text-gray-700">{focus.task}</p>
                                        <span className="text-sm text-gray-500">{focus.count}</span>
                                    </div>
                                ))}
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

export default Dashboard;