import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { Link } from 'react-router-dom';
import { RegUser } from '../../api/authApi';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

export function RegPage() {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [primaryButton, setPrimaryButton] = useState(false);
  const navigate = useNavigate();

  const { setUser } = useContext(UserContext);

  const handleRegister = async () => {
    if (password !== repeatPassword) {
      setError('Пароли не совпадают');
    } else {
      try {
        const result = await RegUser(email, password);
        setPrimaryButton(true);
        setUser(result.username);
        localStorage.setItem('user', JSON.stringify(result.username));
        navigate('/');
      } catch (error) {
        setError(error.message);
      } finally {
        setPrimaryButton(false);
      }
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleRegister();
    }
  };

  useEffect(() => {
    setError(null);
  }, [email, password, repeatPassword]);

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to='/login'>
          <S.ModalLogo>
            <S.ModalLogoImage src='/img/logo_modal.png' alt='logo' />
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
            <S.ModalInput
              type='password'
              name='repeat-password'
              placeholder='Повторите пароль'
              value={repeatPassword}
              onChange={(event) => {
                setRepeatPassword(event.target.value);
              }}
              onKeyDown={handleKeyDown}
            />
          </S.Inputs>
          {error && <S.Error>{error}</S.Error>}
          <S.Buttons>
            <S.PrimaryButton onClick={handleRegister} disabled={primaryButton}>
              {primaryButton ? 'Загрузка...' : 'Зарегистрироваться'}
            </S.PrimaryButton>
            <Link to='/login'>
              <S.SecondaryButton>Уже зарегистрирован</S.SecondaryButton>
            </Link>
          </S.Buttons>
        </>
      </S.ModalForm>
    </S.PageContainer>
  );
}
