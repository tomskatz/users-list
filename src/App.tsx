import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';


import UsersList from './components/UserList/UsersList';
import UserInfo from './components/UserInfo/UserInfo';
import MainHeader from './components/MainHeader/MainHeader';
import { User } from './utils/types';
import client from './api';
import { UsersListProvider } from './utils/context';
import './App.css';

function App() {

  const [users, setUsers] = useState<User[]>([]);
  const [userId, setUserId] = useState<Number | null>(null);
  const location = useLocation()

  useEffect(() => {
    if (location.pathname.length > 1) {
      userId ? setUserId(userId) : setUserId(Number(location.pathname.slice(1)))
    } else {
      setUserId(null)
    }
  }, [location, userId]);


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
    <UsersListProvider value={{ users, userId, setUserId }}>
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
