import React, { useContext } from "react";

import UsersListContext from "../../utils/context";
import { User } from "../../utils/types";
import UserCard from "../UserCard/UserCard";
import './UsersList.scss';


const UsersList: React.FC = () => {

    const { users } = useContext(UsersListContext);

    const renderUsers = () => {
        return users.map((user: User) => {
            return (
                <UserCard key={user.id} user={user}></UserCard>
            )
        })
    }

    return <div className="userList">
        <p className="subTitle">
            ALL USERS ({users.length})
        </p>
        <div className="list">
            {renderUsers()}
        </div>
    </div>
};

export default UsersList;