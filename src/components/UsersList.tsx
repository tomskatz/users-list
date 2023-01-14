import React, { useEffect, useState } from "react";
import client from "../api";
import { User, UsersListProps } from "../utils/types";
import UserPreview from "./UserPreview";
import {styles} from "../utils/styles";



const UsersList: React.FC<UsersListProps> = ({navigateToUser}) => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                let response = await client.get('');
                setUsers(response.data);
            } catch (error) {
                console.log(error);
            }
         };
         fetchPost();
    }, []);


    const rederUsers = () => {
        return users.map((user: User) => {
            if (user) {
                return (
                    <>
                     <UserPreview key={user.id} user={user} navigateToUser={navigateToUser}></UserPreview>
                    </>
                )
            } else {
                return null
            }
        })
    }

    return <>
        <p style={styles.SubTitle}>
            ALL USERS ({users.length})
        </p>
        <br></br>
        <div style={styles.List}>
            {rederUsers()}
        </div>
    </>
};

export default UsersList;