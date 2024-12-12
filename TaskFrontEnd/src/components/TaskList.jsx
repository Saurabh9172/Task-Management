import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const response = await axios.get('http://localhost:5000/tasks');
        const sortedTasks = response.data.sort((a, b) => new Date(a.time) - new Date(b.time));
        setTasks(sortedTasks);
    };

    const completeTask = async (id) => {
        await axios.put(`http://localhost:5000/tasks/${id}`);
        fetchTasks();
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center">Task List</h1>
            <table className="table table-bordered mt-4">
                <thead className="table-dark">
                    <tr>
                        <th>Task</th>
                        <th>Time</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr key={task.id}>
                            <td>{task.name}</td>
                            <td>{new Date(task.time).toLocaleString()}</td>
                            <td>{task.status}</td>
                            <td>
                                {task.status === 'pending' && (
                                    <button
                                        className="btn btn-success"
                                        onClick={() => completeTask(task.id)}
                                    >
                                        Complete
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TaskList;
