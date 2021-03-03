import React from 'react';
import { useHistory } from 'react-router-dom';


const Dashboard = () => {
    const history = useHistory();
    function logout() {
        localStorage.clear()
        history.push('/login')
    }
    return (
        <div>
            <h1>This is the dashboard</h1>
            <button onClick={()=>logout()}>
                Logout
            </button>
            <button onClick = {()=> history.push('/adddata')}>Add</button>
        </div>
    );
}

export default Dashboard;