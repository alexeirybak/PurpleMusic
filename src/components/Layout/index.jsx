import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { activeTrack } from '../../store/actions/creators/creators';
import { Nav } from '../Nav';
import { Search } from '../Search';
import { MainSidebar } from '../MainSidebar';
import { Player } from '../Player';
import { Footer } from '../Footer';
import * as S from './styles';

export const Layout = () => {
  const getTrack = useSelector(activeTrack);
  const currentTrack = getTrack.payload.track.tracks.currentTrack;

  return (
    <S.Wrapper>
      <S.Container>
        <S.NavTrackSidebar>
          <Nav />
          <S.MainCenterBlock>
            <Search />
            <Outlet />
          </S.MainCenterBlock>
          <MainSidebar />
          <Footer />
        </S.NavTrackSidebar>
        {currentTrack ? <Player /> : null}
      </S.Container>
    </S.Wrapper>
  );
};
