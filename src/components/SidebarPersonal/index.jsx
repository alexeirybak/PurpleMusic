import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { PersonIcon } from '../../utils/iconSVG/personIcon';
import * as S from './styles';

export const SidebarPersonal = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <S.SidebarPersonal>
      <S.SidebarPersonalName>{user.username}</S.SidebarPersonalName>
      <S.ButtonLogout onClick={handleLogout}>
        <PersonIcon />
      </S.ButtonLogout>
    </S.SidebarPersonal>
  );
};
