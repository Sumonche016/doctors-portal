

import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../Hooks/useAdmin';


const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    console.log(admin)

    // console.log(appointment)
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* <h2 className='text-5xl text-red-500'>all data {appointment.length}</h2> */}
                    <h1 className='text-center text-4xl mb-4'>Wellcome to Dashboard</h1>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>My Appointments</Link ></li>
                        <li><Link to='/dashboard/review'>My Reviews</Link></li>
                        {admin && <li><Link to='/dashboard/user'>All User </Link></li>}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;