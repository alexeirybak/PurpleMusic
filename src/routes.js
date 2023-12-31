import { Routes, Route } from 'react-router-dom';
import { LogPage } from './pages/logPage';
import { RegPage } from './pages/regPage';
import { Favorites } from './pages/favorites';
import { Category } from './pages/category';
import { NotFound } from './pages/not-found';
import { ProtectedRoute } from './components/ProtectedRoute';
import { useContext } from 'react';
import { UserContext } from './contexts/UserContext';
import { PlayList } from './pages/PlayList';
import { Layout } from './components/Layout';

export const AppRoutes = ({ onAuthButtonClick }) => {
  const { user } = useContext(UserContext);
  return (
    <Routes>
      <Route element={<ProtectedRoute isAllowed={user} />}>
        <Route path='/' element={<Layout />}>
          <Route index element={<PlayList />} />
          <Route path='favorites' element={<Favorites />} />
          <Route path='category/:id' element={<Category />} />
        </Route>
      </Route>
      <Route path='/register' element={<RegPage />} />
      <Route
        path='/login'
        element={<LogPage onAuthButtonClick={onAuthButtonClick} />}
      />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};
