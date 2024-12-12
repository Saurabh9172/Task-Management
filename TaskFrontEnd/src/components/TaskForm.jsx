import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const TaskForm = () => {
    const [name, setName] = useState('');
    const [time, setTime] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/tasks', { name, time });
        navigate('/tasks');
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center">Task Management</h1>
            <form className="mt-4" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="taskName" className="form-label">Task Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="taskName"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="taskTime" className="form-label">Time:</label>
                    <input
                        type="datetime-local"
                        className="form-control"
                        id="taskTime"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default TaskForm;
