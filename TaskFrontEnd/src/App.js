import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<TaskForm />} />
                <Route path="/tasks" element={<TaskList />} />
            </Routes>
        </Router>
    );
};

export default App;
