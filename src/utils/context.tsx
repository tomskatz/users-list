import React from "react";
import { UsersListContextProps } from "./types";

const UsersListContext = React.createContext<UsersListContextProps>({ users: [], setUserID: () => { null } });

export const UsersListProvider = UsersListContext.Provider;

export default UsersListContext;