import React from "react";
import { styles } from "../utils/styles";
import { UserPreviewProps } from "../utils/types";

const UserPreview: React.FC<UserPreviewProps> = ({user, navigateToUser}) => {

    const getNameInitiales = (name: string) => {
        const regex: RegExp = /(\b\S)?/g;
        name = name.substring(name.indexOf(".") + 1); // remove Mrs. and Miss.
        return name.match(regex)?.join("").toUpperCase();
    }
    
    return <>
        <div style={styles.UserPreview.Box}>
            <p style={styles.UserPreview.Initiales}>
                {getNameInitiales(user.name)}
            </p>
            <div style={styles.UserPreview.NameAndEmail}>
                <span style={styles.UserPreview.NameLine}> {user.name} </span>
                <span style={styles.UserPreview.EmailLine}> {user.email} </span>
            </div>
            <button style={styles.Button} onClick={() => navigateToUser(user)}>
                More Info
            </button>
        </div>
    </>
};

export default UserPreview;