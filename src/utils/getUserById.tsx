import { useState, useEffect } from "react";
import { User } from "./types";

const useGetUserById = (users: User[], id?: Number) => {

    const [user, setUser] = useState<User>();

    useEffect(() => {
        const userFromList = users.find(user => user.id === Number(id));
        if (!userFromList) {
            return
        }
        setUser(userFromList);
    }, [users, id]);

    return user;
};

export default useGetUserById;