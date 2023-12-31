import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { Link } from 'react-router-dom';
import { LogUser, getToken } from '../../api/authApi';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

export function LogPage() {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [primaryButton, setPrimaryButton] = useState(false);
  const navigate = useNavigate();

  const validateInput = () => {
    if (!email) throw new Error('Не введена почта');
    if (!password) throw new Error('Не введен пароль');
  };

  const { setUser } = useContext(UserContext);

  const handleLogin = async () => {
    try {
      validateInput();
      setPrimaryButton(true);
      const newUser = await LogUser({ email, password });
      const newToken = await getToken({ email, password });
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      localStorage.setItem('tokenRefresh', JSON.stringify(newToken.refresh));
      localStorage.setItem('tokenAccess', JSON.stringify(newToken.access));
      navigate('/');
    } catch (error) {
      setError(error.message);
    } finally {
      setPrimaryButton(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleLogin();
    }
  };

  useEffect(() => {
    setError(null);
  }, [email, password]);

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to='/login'>
          <S.ModalLogo>
            <S.ModalLogoImage src='/img/logo_purple.png' alt='logo' />
            <S.PM>Purple</S.PM>
            <S.PM>Music</S.PM>
          </S.ModalLogo>
        </Link>
        <>
          <S.Inputs>
            <S.ModalInput
              type='text'
              name='login'
              placeholder='Почта'
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              onKeyDown={handleKeyDown}
            />
            <S.ModalInput
              type='password'
              name='password'
              placeholder='Пароль'
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              onKeyDown={handleKeyDown}
            />
          </S.Inputs>
          {error && <S.Error>{error}</S.Error>}
          <S.Buttons>
            <S.PrimaryButton onClick={handleLogin} disabled={primaryButton}>
              {primaryButton ? 'Загрузка...' : 'Войти'}
            </S.PrimaryButton>
            <Link to='/register'>
              <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
            </Link>
          </S.Buttons>
        </>
      </S.ModalForm>
    </S.PageContainer>
  );
}
