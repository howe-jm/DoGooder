// A page that gets a list of users from the database and displays their names

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('/api/users').then(response => {
            console.log(response);
            setUsers(response.data);
        });
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-bold mb-3">Users</h1>
        </div>
    );
}

export default UserList;