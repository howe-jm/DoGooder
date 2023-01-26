// Create the App component with react-router-dom 6.0.0-beta.0
// Path: resources/js/components/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Index from './Index/Index';
import UserList from './UserList/UserList';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/userlist" element={<UserList />} />
            </Routes>
        </Router>
    );
}

export default App;