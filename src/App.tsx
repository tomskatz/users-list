import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import './App.css';
import UsersList from './components/UserList/UsersList';
import UserInfo from './components/UserInfo/UserInfo';
import MainHeader from './components/MainHeader/MainHeader';
import { User } from './utils/types';
import client from './api';
import { UsersListProvider } from './utils/context';

function App() {

  const [users, setUsers] = useState<User[]>([]);
  const [userId, setUserID] = useState<Number>();

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

  return (
    <UsersListProvider value={{ users, userId, setUserID }}>
      <div className="app">
        <MainHeader />
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path="/:userId" element={<UserInfo />} />
        </Routes>
      </div>
    </UsersListProvider>
  );
}

export default App;
