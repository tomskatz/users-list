import React from "react";
import { UsersListContextProps } from "./types";

const UsersListContext = React.createContext<UsersListContextProps>({ users: [], setUserId: () => { null }, userId: null });

export const UsersListProvider = UsersListContext.Provider;

export default UsersListContext;