import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import UsersListContext from '../../utils/context';
import { UserCardProps } from "../../utils/types";
import './UserCard.scss';

const UserCard: React.FC<UserCardProps> = ({ user }) => {

    const { setUserID } = useContext(UsersListContext)

    const getNameInitials = (name: string) => {
        const regex: RegExp = /(\b\S)?/g;
        name = name.substring(name.indexOf(".") + 1); // remove Mrs. and Miss.
        return name.match(regex)?.join("").toUpperCase();
    }

    return <>
        <div className="userCard">
            <p className="initials">
                {getNameInitials(user.name)}
            </p>
            <div className="nameAndEmail">
                <span className="name"> {user.name} </span>
                <span className="email"> {user.email} </span>
            </div>
            <Link className="button" to={`/${user.id}`} onClick={() => setUserID(user.id)}>
                More Info
            </Link>
        </div>
    </>
};

export default UserCard;