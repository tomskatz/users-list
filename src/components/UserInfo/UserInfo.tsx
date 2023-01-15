import React, { useContext } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import UsersListContext from "../../utils/context";
import useGetUserById from "../../utils/getUserById";
import { SectionName } from "../../utils/types";
import InfoSection from "../InfoSection/InfoSection";
import './UserInfo.scss';

const UserInfo: React.FC = () => {

    const { users, userId, setUserID } = useContext(UsersListContext);
    const user = useGetUserById(users, Number(userId));

    const renderSections = () => {
        return Object.values(SectionName).map((name) => {
            return (
                user ? (<InfoSection sectionName={name} user={user} />) : null
            )
        })
    }
    return <div className="userInfo">
        {user ? <>
            <div className="navigationTitle">
                <p className="subTitle">
                    {user.name.toUpperCase()}
                </p>
                <Link className="button" to={'/'} onClick={() => setUserID(null)}>
                    <IoIosArrowBack className="arrow" />
                    <span className="btnBack">
                        Back
                    </span>
                </Link>
            </div>
            {renderSections()}
        </>
            : null
        }
    </div >
};

export default UserInfo;