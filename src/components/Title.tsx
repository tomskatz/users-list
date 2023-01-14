import React from "react";
import {styles} from "../utils/styles";
import {IoIosArrowForward} from "react-icons/io"
import { Link, useLocation } from "react-router-dom";

type BreadcrumbsProps = {
    userName?: string
}

//TODO: add bradcrambs navigation
const Title: React.FC<BreadcrumbsProps> = ({userName}) => {
    const location = useLocation()
    
    return <>
        <div style={styles.Breadcrumbs}>
            <Link key={"title"} to={'/'} style={styles.Title}>{"Users List"}</Link>
            {
                location.pathname !== '/' && <span> <IoIosArrowForward/> {userName}</span>
            }
        </div>
        <div style={styles.Divider} />
    </>
};

export default Title;