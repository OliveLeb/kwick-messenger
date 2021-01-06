import React from 'react';

const UsersList = ({users}) => {
    return (
        <aside>
            <ul>
                {
                    users.map((user,index) => <li key={index}>{user}</li>)
                }
            </ul>
        </aside>
    )
};

export default UsersList;
