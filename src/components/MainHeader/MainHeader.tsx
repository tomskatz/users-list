import React, { useContext } from "react";
import { IoIosArrowForward } from "react-icons/io"
import { Link } from "react-router-dom";

import UsersListContext from "../../utils/context";
import useGetUserById from "../../utils/getUserById";
import './MainHeader.scss';


const MainHeader: React.FC = () => {

    const { users, userId, setUserId } = useContext(UsersListContext)
    const user = useGetUserById(users, userId);

    return <div className="breadcrumbs">
        <Link key={"title"} to={'/'} className="header" onClick={() => setUserId(null)}>
            Users List
        </Link>
        {
            userId && <span> <IoIosArrowForward className="arrow" /> {user?.name}</span>
        }
    </div>
};

export default MainHeader;