import { useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { AppRoutes } from '../routes';
import { setTheme } from '../utils/theme';
import { GlobalStyle } from '../styles/global';

setTheme();

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={{ user, setUser }}>
        <AppRoutes />
      </UserContext.Provider>
    </>
  );
};

export default App;
