import * as S from './styles';

export const TrackLikesMainSvg = ({ isLiked }) => {
  return (
    <S.TrackLikesMainImg
      $isLiked={isLiked}
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='14'
      viewBox='0 0 16 14'
      fill='none'
    >
      <path
        d='M8.34372 2.00669H8.36529C9.29718 1.19273 11.7563 -0.0832586 13.9565 1.51832C17.3111 3.96019 14.2458 9.25098 8.36529 12.751H8.34372M8.34378 2.00669H8.32221C7.39032 1.19273 4.93121 -0.0832586 2.73102 1.51832C-0.623552 3.96019 2.44172 9.25098 8.32221 12.751H8.34378'
        stroke='#B1B1B1'
      />
    </S.TrackLikesMainImg>
  );
};
