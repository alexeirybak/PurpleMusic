import { SidebarPersonal } from '../SidebarPersonal';
import { SidebarPlayLists } from '../SidebarPlayLists';

import * as S from './styles';

export const MainSidebar = () => {
  return (
    <S.MainSidebar>
      <SidebarPersonal />
      <SidebarPlayLists />
    </S.MainSidebar>
  );
};
