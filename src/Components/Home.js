// Home.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home.css";

const HomeScreen = () => {
    const navigate = useNavigate();
    const [currentScreen, setCurrentScreen] = useState('employees');

    const handleLogout = () => {
        navigate('/');
    };

    const renderContent = () => {
        switch (currentScreen) {
            case 'employees':
                return <Employees />;
            case 'departments':
                return <Departments />;
            case 'paychecks':
                return <Paychecks />;
            case 'auditLogs':
                return <AuditLogs />;
            default:
                return <Employees />;
        }
    };

    return (
        <div className="fullPageContainer">
            <TopTab handleLogout={handleLogout} />
            <div className="contentContainer">
                <SideBar setCurrentScreen={setCurrentScreen} />
                <div className="mainContent">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

const TopTab = ({ handleLogout }) => (
    <div className="topTab">
        <h1>Payroll App</h1>
        <button onClick={handleLogout}>Log Out</button>
    </div>
);


const SideBar = ({ setCurrentScreen }) => (
    <div className="sidebar">
        <a onClick={() => setCurrentScreen('employees')}>Employees</a>
        <a onClick={() => setCurrentScreen('departments')}>Departments</a>
        <a onClick={() => setCurrentScreen('paychecks')}>Paychecks</a>
        <a onClick={() => setCurrentScreen('auditLogs')}>Audit Logs</a>
    </div>
);

const Employees = () => (
    <div>
        <h2>Employees</h2>
        <ul>
            <li>Employee 1</li>
            <li>Employee 2</li>
            <li>Employee 3</li>
            {/* Add more employees as needed */}
        </ul>
    </div>
);

const Departments = () => <div>Departments content here</div>;
const Paychecks = () => <div>Paychecks content here</div>;
const AuditLogs = () => <div>Audit Logs content here</div>;

export default HomeScreen;
