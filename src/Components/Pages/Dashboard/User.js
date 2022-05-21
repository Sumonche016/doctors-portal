import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import Singleuser from './Singleuser';
const User = () => {

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()))


    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1>from user {users.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <Singleuser refetch={refetch} key={user._id} user={user}></Singleuser>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default User;