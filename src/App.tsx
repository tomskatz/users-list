import {useState} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';

import './App.css';
import { styles } from './utils/styles';
import UsersList from './components/UsersList';
import UserInfo from './components/UserInfo';
import { User } from './utils/types';
import Title from './components/Title';

function App() {

  const [user, setUser] = useState<User>();

  const navigate = useNavigate();
  //TODO: handle breadcramb logic when back from broser

  const navigateToUser = (user: User) => {
    setUser(user);
    navigate(`/${user.name}`);
  };

  const navigateUsersList = () => {
    navigate('/');
  };

  return (
    <div style={styles.App}>
      <Title userName={user?.name}/>
      <Routes>
          <Route path="/" element={<UsersList navigateToUser={navigateToUser} />} />
          {user && <Route path={`/${user.name}`} element={<UserInfo user={user} navigateUsersList={navigateUsersList} />} />}
        </Routes>
    </div>
  );
}

export default App;
