import React, { useContext, useState } from 'react';
import { Context } from '../Context';
import { UserForm } from '../components/UserForm';
import { useRegisterMutation } from '../hooks/useRegisterMutation';
import { useLoginUser } from '../hooks/useLoginUser';

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context);

  const [login, setLogin] = useState(false);

  const handleLogin = () => {
    setLogin(!login);
  };

  const { registerMutation, loading: loadingRegister, error: errorRegister } = useRegisterMutation();
  const { loginMutation, loading: loadingLogin, error: errorLogin } = useLoginUser();

  const errorMsgRegister = errorRegister && 'El usuario ya existe o hay un error en el servidor';
  const errorMsgLogin = errorLogin && 'La contraseña es incorrecta o hay un error en el servidor';

  const onSubmitRegister = ({ email, password }) => {
    const input = { email, password };
    const variable = { input };
    registerMutation({ variables: variable }).then(({ data }) => {
      const { signup } = data;
      activateAuth(signup);
    });
  };

  const onSubmitLogin = ({ email, password }) => {
    const input = { email, password };
    const variable = { input };
    loginMutation({ variables: variable }).then(({ data }) => {
      const { login } = data;
      activateAuth(login);
    });
  };

  return (
    <>
      {login ? (
        <UserForm
          onSubmit={onSubmitLogin}
          title='Inicia Sesión'
          disabled={loadingLogin}
          error={errorMsgLogin}
          msm='¿No tienes una Cuenta?'
          path='/register'
          top='Registrate'
          login={handleLogin}
        />
      ) : (
        <UserForm
          onSubmit={onSubmitRegister}
          title='Registrate'
          error={errorMsgRegister}
          disabled={loadingRegister}
          msm='¿Ya tienes una cuenta?'
          path='/login'
          top='Inicia Sesión'
          login={handleLogin}
        />
      )}
    </>
  );
};
