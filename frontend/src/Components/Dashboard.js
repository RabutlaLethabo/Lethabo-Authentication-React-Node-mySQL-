import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure you import Bootstrap CSS

const Dashboard = () => {
    return (
        <div className="container-fluid">
            {/* Header */}
            <header className="bg-primary text-white py-3 mb-4">
                <div className="container">
                    <h1 className="text-center">Dashboard</h1>
                </div>
            </header>

            {/* Main content */}
            <main className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h2 className="card-title">Welcome to Your Dashboard</h2>
                                <p className="card-text">
                                    This is the main area where you can manage your profile, view notifications, and access various features.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-dark text-white py-3 mt-4">
                <div className="container text-center">
                    <p className="mb-0">&copy; {new Date().getFullYear()} Unitac Solutions. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Dashboard;
