import React from "react";
import { styles } from "../utils/styles";
import { User } from "../utils/types";
import InfoSection from "./InfoSection";

type UserInfoProps = {
    user: User,
    navigateUsersList: Function
}

const UserInfo: React.FC<UserInfoProps> = ({user, navigateUsersList}) => {
    
    return <>
        <div style={styles.UserInfo.NavigationTitle}>   
            <p style={styles.SubTitle}>
                {user.name.toUpperCase()} 
            </p>
            <button style={styles.Button} onClick={() => navigateUsersList()}>{"< Back"}</button>
        </div>
        <InfoSection sectionName={'User Info'} user={user}></InfoSection>
        <InfoSection sectionName={'Address'} user={user}></InfoSection>
        <InfoSection sectionName={'Company'} user={user}></InfoSection>
    </>
};

export default UserInfo;