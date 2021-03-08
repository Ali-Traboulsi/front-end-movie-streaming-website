// import React from 'react';
// import { useHistory } from 'react-router-dom';
//
//
// const Dashboard = () => {
//     const history = useHistory();
//     function logout() {
//         localStorage.clear()
//         history.push('/login')
//     }
//     return (
//         <div>
//             <h1>This is the dashboard</h1>
//             <button onClick={()=>logout()}>
//                 Logout
//             </button>
//             <button onClick = {()=> history.push('/adddata')}>Add</button>
//         </div>
//     );
// }
//
// export default Dashboard;

import React from 'react'
import { useHistory } from 'react-router-dom'
import logo from './logo.png';
import './Dashboard.css'

const Dashboard = () => {
    const history = useHistory();
    function logout() {
        localStorage.clear()
        history.push('/login')
    }
    return (
        <div className='outside'>

            <div className='container'>
                <div className='logo'>
                    <img src={logo} alt='website logo'/>
                </div>
                <div className='btns'>
                    <button className='logout-btn' onClick={()=>logout()}>
                        Logout
                    </button>
                    <button className='add-btn' onClick = {()=> history.push('/admin')}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard